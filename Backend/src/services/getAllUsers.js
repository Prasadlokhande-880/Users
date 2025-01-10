const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

/**
 * Get all users from the database.
 * @returns {Promise<Array>} - List of users.
 */
const getAllUsers = async () => prisma.user.findMany();

module.exports = getAllUsers;
