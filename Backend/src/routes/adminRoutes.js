const express = require("express");
const {
  getAllUsers,
  updateUser,
  getUsersByRole,
  deleteUser,
  createUser,
} = require("../Controllers/index");
const {
  validateUserCreation,
  validateUserUpdate,
} = require("../schemas/validationMiddleware");

const router = express.Router();

/**
 * Route to get all users.
 * @name GET /
 * @function
 */
router.get("/", getAllUsers);

/**
 * Route to get users by role.
 * @name GET /:role
 * @function
 */
router.get("/:role", getUsersByRole);

/**
 * Route to update a user.
 * @name PUT /:id
 * @function
 */
router.put("/:id", validateUserUpdate, updateUser);

/**
 * Route to delete a user.
 * @name DELETE /:id
 * @function
 */
router.delete("/:id", deleteUser);

/**
 * Route to create a user.
 * @name POST /
 * @function
 */
router.post("/", validateUserCreation, createUser);

module.exports = router;
