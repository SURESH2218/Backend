import mongoose from "mongoose";

import express from "express";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

connectDB();

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