import cloudinary from "cloudinary";
import config from "#config";
import { ApiError } from "#utils";
import { StatusCodes } from "http-status-codes";

cloudinary.config({
  cloud_name: config.cloudinary.cloud_name,
  api_key: config.cloudinary.api_key,
  api_secret: config.cloudinary.api_secret,
});

const uploadImage = async (image, options) => {
  try {
    return await cloudinary.v2.uploader.upload(image, options);
  } catch (error) {
    console.log(error);
    throw new ApiError(
      "Error while uploading to cloudinary",
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
};

export default {
  uploadImage,
};
