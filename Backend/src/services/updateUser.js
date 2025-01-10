const { PrismaClient } = require("@prisma/client");
const encryptData = require("./encryptData");
const prisma = new PrismaClient();

/**
 * Update user data by ID with encryption.
 * @param {number} id - User ID.
 * @param {Object} data - Updated user data.
 * @returns {Promise<Object>} - Updated user object.
 */
const updateUser = async (id, data) => {
  if (data.name) data.name = encryptData(data.name);
  if (data.email) data.email = encryptData(data.email);
  if (data.password) data.password = encryptData(data.password);
  return prisma.user.update({ where: { id: parseInt(id) }, data });
};

module.exports = updateUser;
