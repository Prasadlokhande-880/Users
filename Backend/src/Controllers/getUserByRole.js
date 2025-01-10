const userService = require("../services/userService");

/**
 * Retrieves users by their role from the database.
 *
 * This function handles fetching users from the database based on the provided
 * role. It converts the role to uppercase and calls the `userService.getUsersByRole`
 * method to retrieve users with the specified role. Upon success, it returns the list
 * of users with that role. If an error occurs, it sends an error message.
 *
 * @async
 * @function
 * @param {Object} req - The request object containing the parameters.
 * @param {Object} req.params - The parameters sent with the request, including the role.
 * @param {string} req.params.role - The role of users to fetch.
 * @param {Object} res - The response object used to send the status and data back to the client.
 * @param {Function} res.status - Sets the HTTP status code for the response.
 * @param {Function} res.json - Sends a JSON response back to the client with the list of users or an error message.
 * @returns {Promise<void>} - A promise that resolves with no value. If successful, a list of users is sent in the response.
 *
 * @throws {Error} If there is an issue fetching the users, an error with a message will be thrown.
 */

const getUsersByRole = async (req, res) => {
  try {
    const { role } = req.params;
    const users = await userService.getUsersByRole(role.toUpperCase());
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = getUsersByRole;
