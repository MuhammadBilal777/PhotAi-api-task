import express from "express";
import { imageToolController } from "#controllers";
import { multer, rateLimiter } from "#middlewares";

const router = express.Router();

/**
 * @swagger
 * /api/v1/object-remove:
 *   get:
 *     summary: Get employee by ID.
 *     description: Get employee by ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Employee ID
 *     responses:
 *       '200':
 *         description: A successful response
 *       '404':
 *         description: Employee not found
 *       '500':
 *         description: Internal server error
 */
router
  .route("/object-remove")
  .post(
    rateLimiter,
    multer.single("sourceImage"),
    imageToolController.removeObject
  );

export default router;
