import connectDB from "./db/index.js";
import app from "./app.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Server is running at port :${process.env.PORT}`);
    });
  })
  .catch((err) => console.log("Mongo db connnection failed", err));

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });
// console.log(process.env.CORS_ORIGIN);
// console.log(process.env.PORT);

//or

//   const startServer = async () => {
//     try {
//       await connectDB();
//       const PORT = process.env.PORT || 8000;
//       app.listen(PORT, () => {
//         console.log(`Server is running at port: ${PORT}`);
//       });
//     } catch (error) {
//       console.error("Failed to start the server:", error);
//       process.exit(1); // Exit the process with failure code
//     }
//   };

//   startServer();

//iife
// (async () => {
//  try {
//   mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   app.on("error", (err) => {
//    console.log(err);
//    throw err;
//   });
//   app.listen(process.env.PORT, () => {
//    console.log(`App is listening on port ${process.env.PORT}`);
//   });
//  } catch (error) {
//   console.error("Error", error);
//   throw error("error");
//  }

// })();

// wihtout iife
// const startServer = async () => {
//  try {
//   await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//   app.on("error", (Error) => {
//    console.log(Error);
//   });
//   app.listen(process.env.PORT, () => {
//    console.log("App is listening at port " + process.env.PORT);
//   });
//  } catch (error) {
//   console.error(error);
//  }
// };

// startServer();
