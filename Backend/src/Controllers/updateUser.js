const userService = require("../services/userService");

/**
 * Updates a user's information in the database.
 *
 * This function handles updating a user's details based on the provided user ID.
 * It calls the `userService.updateUser` method to update the user's information
 * with the data from the request body. Upon success, it returns the updated user data.
 * If an error occurs during the process, it sends an error message.
 *
 * @async
 * @function
 * @param {Object} req - The request object containing the parameters and the data to update.
 * @param {Object} req.params - The parameters sent with the request, including the user ID.
 * @param {string} req.params.id - The ID of the user to update.
 * @param {Object} req.body - The body of the request containing the new data for the user.
 * @param {Object} res - The response object used to send the status and updated user data back to the client.
 * @param {Function} res.status - Sets the HTTP status code for the response.
 * @param {Function} res.json - Sends a JSON response back to the client with the updated user or an error message.
 * @returns {Promise<void>} - A promise that resolves with no value. If successful, the updated user data is sent in the response.
 *
 * @throws {Error} If there is an issue updating the user, an error with a message will be thrown.
 */

const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await userService.updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = updateUser;
