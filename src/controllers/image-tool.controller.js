import { imageToolService } from "#services";
import { ApiError } from "#utils";
import { StatusCodes } from "http-status-codes";
import { cloudinaryApi } from "#apis";

const removeObject = async (req, res) => {
  const sourceImage = req.file;
  const { maskImage } = req.body;

  if (!sourceImage || !maskImage) {
    throw new ApiError("Invalid Payload", StatusCodes.UNPROCESSABLE_ENTITY);
  }

  const uploadImage = await cloudinaryApi.uploadImage(sourceImage?.path, {
    folder: "uploads",
    resource_type: "auto",
  });

  const response = await imageToolService.objectRemove({
    sourceUrl: uploadImage?.secure_url,
    maskImage,
  });
  res.status(200).json({ success: true, data: response });
};

export default {
  removeObject,
};
