const {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDocs,
  serverTimestamp,
  addDoc,
  query,
  orderBy,
} = require("firebase/firestore");
const app = require("../config/firebase.js");
const { where, limit } = require("firebase/firestore/lite");

// Create a Firestore reference
const db = getFirestore(app);

const sendMessage = async (req, res) => {
  console.log("log by chat app", req.userInfo.id);
  try {
    const { recipientId, content } = req.body;
    const senderId = req.userInfo.id;

    // Create a new message document
    const messageRef = await addDoc(
      collection(
        db,
        "chats",
        `chat_${senderId}_with_${recipientId}`,
        "messages"
      ),
      {
        sender: senderId,
        recipient: recipientId,
        content: content,
        timestamp: serverTimestamp(),
      }
    );

    res
      .status(200)
      .json({ message: "Message sent successfully", messageId: messageRef.id });
  } catch (error) {
    console.error("Error sending message:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
};

// const getMessages = async (req, res) => {
//   try {
//     const { recipientId } = req.params;
//     // const senderId = req.userInfo.id;
//     const senderId = req.userInfo.id;

//     // Retrieve messages between sender and recipient
//     const querySnapshot = await getDocs(
//       collection(
//         db,
//         "chats",
//         `chat_${senderId}_with_${recipientId}`,
//         "messages"
//       )
//     );

//     const messages = [];
//     querySnapshot.forEach((doc) => {
//       messages.push(doc.data());
//     });

//     res.status(200).json({ messages });
//   } catch (error) {
//     console.error("Error retrieving messages:", error);
//     res.status(500).json({ error: "Failed to retrieve messages" });
//   }
// };

const getMessages = async (req, res) => {
  try {
    const { senderId } = req.body;
    const recipientId = req.userInfo.id;

    // Query sent messages
    const sentQuery = query(
      collection(
        db,
        "chats",
        `chat_${senderId}_with_${recipientId}`,
        "messages"
      ),
      orderBy("timestamp")
    );
    const sentSnapshot = await getDocs(sentQuery);

    // Query received messages
    const receivedQuery = query(
      collection(
        db,
        "chats",
        `chat_${recipientId}_with_${senderId}`,
        "messages"
      ),
      orderBy("timestamp")
    );
    const receivedSnapshot = await getDocs(receivedQuery);

    // Merge sent and received messages
    const messages = [];
    sentSnapshot.forEach((doc) => {
      messages.push(doc.data());
    });
    receivedSnapshot.forEach((doc) => {
      messages.push(doc.data());
    });

    // Sort messages by timestamp in ascending order
    messages.sort((a, b) => a.timestamp - b.timestamp);

    res.status(200).json({ messages });
  } catch (error) {
    console.error("Error retrieving messages:", error);
    res.status(500).json({ error: "Failed to retrieve messages" });
  }
};

// const getUsersWithChat = async (req, res) => {
//   try {
//     const userId = req.userInfo.id;

//     // Query all chat documents where the user is a participant
//     const querySnapshot = await getDocs(
//       query(
//         collection(db, "chats"),
//         where("participants", "array-contains", userId)
//       )
//     );

//     // Collect chat partners' user IDs
//     console.log(userId);
//     // console.log(querySnapshot);
//     const chatPartners = [];
//     querySnapshot.forEach((doc) => {
//       const participants = doc.data().participants;

//       const chatPartnerIds = participants.filter(
//         (participant) => participant !== userId
//       );
//       chatPartners.push(...chatPartnerIds);
//     });

//     // Remove duplicate chat partner IDs
//     const uniqueChatPartners = [...new Set(chatPartners)];

//     // Sort chat partners by the latest message timestamp
//     uniqueChatPartners.sort(async (a, b) => {
//       const timestampA = await getLatestMessageTimestamp(userId, a);
//       const timestampB = await getLatestMessageTimestamp(userId, b);
//       return timestampB - timestampA;
//     });

//     res.status(200).json({ chatPartners: uniqueChatPartners });
//   } catch (error) {
//     console.error("Error retrieving chat partners:", error);
//     res.status(500).json({ error: "Failed to retrieve chat partners" });
//   }
// };

const getUsersWithChat = async (req, res) => {
  try {
    const userId = req.userInfo.id;

    // Query all chat documents where the user is a participant
    const chatQuerySnapshot = await getDocs(
      query(
        collection(db, "chat"),
        where("participants", "array-contains", userId)
      )
    );

    const chatPartners = [];
    chatQuerySnapshot.forEach(async (chatDoc) => {
      const chatDocRef = doc(db, "chat", chatDoc.id);
      const messagesQuerySnapshot = await getDocs(
        collection(chatDocRef, "messages")
      );

      messagesQuerySnapshot.forEach((messageDoc) => {
        const participants = messageDoc.data().participants;

        // Check if the current user is a participant in the chat
        if (participants.includes(userId)) {
          const chatPartnerIds = participants.filter(
            (participant) => participant !== userId
          );
          chatPartners.push(...chatPartnerIds);
        }
      });
    });

    // Remove duplicate chat partner IDs
    const uniqueChatPartners = [...new Set(chatPartners)];

    // Sort chat partners by the latest message timestamp
    uniqueChatPartners.sort(async (a, b) => {
      const timestampA = await getLatestMessageTimestamp(userId, a);
      const timestampB = await getLatestMessageTimestamp(userId, b);
      return timestampB - timestampA;
    });

    res.status(200).json({ chatPartners: uniqueChatPartners });
  } catch (error) {
    console.error("Error retrieving chat partners:", error);
    res.status(500).json({ error: "Failed to retrieve chat partners" });
  }
};

module.exports = { sendMessage, getMessages, getUsersWithChat };
