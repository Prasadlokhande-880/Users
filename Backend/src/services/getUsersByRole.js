const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Get users by their role.
 * @param {string} role - Role to filter users by.
 * @returns {Promise<Array>} - List of users with the specified role.
 */
const getUsersByRole = async (role) =>
  prisma.user.findMany({ where: { role } });

module.exports = getUsersByRole;
