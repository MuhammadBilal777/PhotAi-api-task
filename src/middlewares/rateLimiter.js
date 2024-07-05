import { ApiError } from "#utils";
import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 5,
  handler: (req, res, next) => {
    next(new ApiError("Too many requests, please try again later.", 429));
  },
});

export default limiter;
