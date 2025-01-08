const express = require("express");
const adminController = require("../controllers/userController");
const Joi = require("joi");
const createAdminSchema = require("../Schemas/adminSchemas");
const updateAdminSchema = require("../Schemas/adminSchemas");

const router = express.Router();

// Middleware for Validation
const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false }); // `abortEarly: false` to collect all errors
    if (error) {
      const errorMessages = error.details.map((detail) => detail.message); // Collect all error messages
      return res.status(400).json({ errors: errorMessages });
    }
    next();
  };
};

// Admin-specific routes with validation middleware
router.get("/", adminController.getAllUsers); // No validation needed
router.post(
  "/",
  validateRequest(createAdminSchema),
  adminController.createUser
); // Validate on create
router.put(
  "/:id",
  validateRequest(updateAdminSchema),
  adminController.updateUser
); // Validate on update
router.delete("/:id", adminController.deleteUser); // No validation needed

module.exports = router;
