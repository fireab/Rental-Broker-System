// // const initializeApp = require("firebase/app");

// // const firebaseConfig = {
// //   apiKey: "AIzaSyAWufiuQ3rEjIX74uaa7HkI0d832iViSAA",
// //   authDomain: "fire-a81fc.firebaseapp.com",
// //   projectId: "fire-a81fc",
// //   storageBucket: "fire-a81fc.appspot.com",
// //   messagingSenderId: "968367490051",
// //   appId: "1:968367490051:web:5ef32e8d086c19e67d7a36",
// // };

const app = require("../config/firebase.js");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getFirestore, collection, doc, setDoc } = require("firebase/firestore");

const auth = getAuth(app);
const firestore = getFirestore(app);

// createUserWithEmailAndPassword(auth, "firet@gmail.com", "12312344")
//   .then((userCredential) => {
//     const user = userCredential.user;
//     console.log("User created:", user.uid);

//     // Create a Firestore document for the user
//     const userDocRef = doc(firestore, "users", user.uid);
//     const userData = {
//       email: user.email,
//       fullname: "christan Abera",
//       // Add additional user data if required
//     };

//     setDoc(userDocRef, userData)
//       .then(() => {
//         console.log("Firestore document created");
//       })
//       .catch((error) => {
//         console.error("Error creating Firestore document:", error);
//       });
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error("User creation failed:", errorMessage);
//   });

// createUserWithEmailAndPassword(auth, "cris@gmail.com", "12312344")
//   .then((userCredential) => {
//     // User creation successful
//     const user = userCredential.user;
//     console.log("User created:", user.uid);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error("User creation failed:", errorMessage);
//     // ...
//   });

//login

// const app = require("../config/firebase.js");
// const { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

// const auth = getAuth(app);

// signInWithEmailAndPassword(auth, "user@gmail.com", "12345678")
//   .then((userCredential) => {
//     // User login successful
//     const user = userCredential.user;
//     console.log("User logged in:", user.uid);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error("User login failed:", errorMessage);
//     // ...
//   });

// const app = require("../config/firebase.js");
// const { getAuth, signOut } = require("firebase/auth");

// const auth = getAuth(app);

// signOut(auth)
//   .then(() => {
//     // User logout successful
//     console.log("User logged out");
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     console.error("User logout failed:", errorMessage);
//     // ...
//   });
