const prisma = require("../../prismaClient");

/**
 * Delete a user by their ID.
 * @param {number} id - User ID.
 * @returns {Promise<Object>} - Deleted user object.
 */
const deleteUser = async (id) =>
  prisma.user.delete({ where: { id: parseInt(id) } });

module.exports = deleteUser;
