import multer from "multer";
import mime from "mime-types";
import { ApiError } from "#utils";
import { StatusCodes } from "http-status-codes";
import path from "path";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB

const allowedMimeTypes = ["image/jpeg", "image/png", "image/webp"];

const fileFilter = (req, file, cb) => {
  const mimetype = mime.lookup(file.originalname);

  if (allowedMimeTypes.includes(mimetype)) {
    cb(null, true);
  } else {
    cb(
      new ApiError(
        "Invalid mime type. Only images are allowed.",
        StatusCodes.BAD_REQUEST
      )
    );
  }
};

const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(
      null,
      `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`
    );
  },
});

const upload = multer({
  storage,
  limits: { fileSize: MAX_FILE_SIZE },
  fileFilter,
});

export default upload;
