const express = require("express");
const teacherController = require("../controllers/userController");

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

// Teacher-specific routes
router.get("/", teacherController.getAllUsers);
router.post(
  "/",
  validateRequest(createAdminSchema),
  teacherController.createUser
);
router.put(
  "/:id",
  validateRequest(createAdminSchema),
  teacherController.updateUser
);
router.delete("/:id", teacherController.deleteUser);

module.exports = router;
