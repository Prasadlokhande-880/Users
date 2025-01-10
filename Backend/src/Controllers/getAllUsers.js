const userService = require("../services/userService");

/**
 * Retrieves all users from the database.
 *
 * This function handles fetching all users from the database by calling the
 * `userService.getAllUsers` method. Upon success, it returns a list of users.
 * If an error occurs during the process, it responds with an error message.
 *
 * @async
 * @function
 * @param {Object} req - The request object.
 * @param {Object} res - The response object used to send the status and data back to the client.
 * @param {Function} res.status - Sets the HTTP status code for the response.
 * @param {Function} res.json - Sends a JSON response back to the client with the list of users or an error message.
 * @returns {Promise<void>} - A promise that resolves with no value. If successful, a list of users is sent in the response.
 *
 * @throws {Error} If there is an issue fetching the users, an error with a message will be thrown.
 */


const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getAllUsers;
