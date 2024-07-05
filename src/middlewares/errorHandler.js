import { ApiError, ErrorMessage } from "#utils";
import { StatusCodes } from "http-status-codes";
import { MulterError } from "multer";

const errorHandler = (err, req, res, next) => {
  if (err instanceof ApiError) {
    res.status(err.statusCode ?? 500).json({
      success: false,
      message: err.message ?? "Internal server error",
    });
  }

  if (err instanceof MulterError) {
    let error = "";
    switch (err.code) {
      case ErrorMessage.LIMIT_UNEXPECTED_FILE:
        error = `Unexpected field: ${err.field}`;
        break;
      case ErrorMessage.LIMIT_FILE_SIZE:
        error = `File too large`;
        break;
      case ErrorMessage.LIMIT_FILE_COUNT:
        error = `Too many files`;
        break;
      case ErrorMessage.LIMIT_FIELD_KEY:
        error = `Field name too long: ${err.field}`;
        break;
      default:
        error = `Multer error: ${err.message}`;
        break;
    }

    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: error ?? "Internal server error",
    });
  }
  next();
};

export default errorHandler;
