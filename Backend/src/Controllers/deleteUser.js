const userService = require("../services/userService");

/**
 * Deletes a user from the database.
 *
 * This function handles the deletion of a user based on the provided user ID.
 * It interacts with the `userService.deleteUser` method to perform the deletion.
 * Upon success, it responds with a success message; if an error occurs, it sends
 * an error response with the relevant message.
 *
 * @async
 * @function
 * @param {Object} req - The request object, which contains the parameters for the deletion.
 * @param {Object} req.params - The parameters sent with the request, including the user ID.
 * @param {string} req.params.id - The ID of the user to be deleted.
 * @param {Object} res - The response object used to send the status and message back to the client.
 * @param {Function} res.status - Sets the HTTP status code for the response.
 * @param {Function} res.json - Sends a JSON response back to the client with a message or error.
 * @returns {Promise<void>} - A promise that resolves with no value.
 *
 * @throws {Error} If there is an issue during the deletion process, an error with a message will be thrown.
 */

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await userService.deleteUser(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUser;
