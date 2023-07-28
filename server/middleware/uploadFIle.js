// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "../server/uploads");
//     },
//     filename: function (req, file, cb) {
//       cb(null, Date.now() + file.originalname);
//     },
//   });

//   const upload = multer({ storage });

//   app.post("/api/upload", upload.array("files"), function (req, res) {
//     const files = req.files; // an array of uploaded files
//     // Process the files or perform any required operations
//     const filenames = files.map((file) => file.filename);
//     res.status(200).json(filenames);
//   });

/////
////////

import multer from "multer";
let storage;
try {
  storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });
} catch (error) {
  console.log(error);
}
const upload = multer({ storage });

export default upload;

// app.post(
//   '/api/posts',
//   upload.array('propertyImages'),
//   async (req, res) => {
//     try {
//       // Extract data from request body and uploaded files
//       const {
//         propertyTitle,
//         propertyType,
//         propertyDescription,
//         propertyRegion,
//         propertyCity,
//         propertyAddress,
//         propertyQuantity,
//         maxLeaseLength,
//         minLeaseLength,
//         propertyPrice,
//         propertyContact,
//       } = req.body;

//       const propertyImages = req.files.map((file) => ({
//         image: file.filename,
//       }));

//       // Create a new post using Prisma client
//       const newPost = await prisma.posts.create({
//         data: {
//           propertyTitle,
//           propertyType,
//           propertyDescription,
//           propertyRegion,
//           propertyCity,
//           propertyStreet: propertyAddress,
//           propertyQuantity,
//           maxLeaseLengthValue: maxLeaseLength.value,
//           maxLeaseLengthType: maxLeaseLength.type,
//           minLeaseLengthValue: minLeaseLength.value,
//           minLeaseLengthType: minLeaseLength.type,
//           authorId: req.userInfo.id,
//           propertyImages: {
//             create: propertyImages,
//           },
//           propertyPrice: {
//             create: propertyPrice,
//           },
//           propertyContact: {
//             create: propertyContact,
//           },
//         },
//       });

//       return res.status(200).json(newPost);
//     } catch (error) {
//       res.status(500).json('Internal server error');
//     }
//   }
// );
