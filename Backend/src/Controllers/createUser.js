/**
 * @fileoverview Controller function for creating a new user.
 * Handles the HTTP POST request to create a user.
 */

const userService = require("../services/userService");

/**
 * Create User Controller
 * @async
 * @function createUser
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user data.
 * @param {Object} res - Express response object.
 * @returns {Promise<void>} - Sends a JSON response with the created user or an error message.
 */
const createUser = async (req, res) => {
  try {
    const newUser = await userService.createUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = createUser;
