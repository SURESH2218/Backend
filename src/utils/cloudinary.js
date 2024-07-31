import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import "dotenv/config";

cloudinary.config({
  cloud_name: process_params.env.CLOUDINARY_NAME,
  api_key: CLOUDINARY_API_KEY,
  api_secret: CLOUDINARY_API_SECRETKEY,
});

const uploadOnCloudinary = async (localfilepath) => {
  try {
    if (!localfilepath) return null;
    const response = await cloudinary.uploader.upload(localfilepath, {
      resource_type: "auto",
    });
    //file uploaded successfully..........
    console.log("file uploaded successfully on cloudinary", response.url);
    return response;
  } catch (error) {
    fs.unlinkSync(localfilepath); //remove the locally saved temporary file as the upload operation got failed
    return null;
  }
};

export default uploadOnCloudinary;
