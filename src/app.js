import cors from "cors";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import { errorHandler, rateLimiter, swagger } from "#middlewares";
import swaggerUi from "swagger-ui-express";
import routes from "./routes/image-tools.route.js";
const app = express();

// Express Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));
app.use(rateLimiter);

// Serve Swagger UI at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swagger));

app.use("/api/v1", routes);

// Express No Route middleware
app.use("*", (req, res, next) => {
  res.status(404).json({
    message: `No route ${req.originalUrl} available in this server`,
    success: false,
  });
  next();
});

// Express Error middleware
app.use(errorHandler);

export default app;
