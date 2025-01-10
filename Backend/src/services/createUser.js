const { PrismaClient } = require("@prisma/client");
const encryptData = require("./encryptData");
const prisma = new PrismaClient();

/**
 * Create a new user with encrypted data.
 * @param {Object} data - User data to create.
 * @returns {Promise<Object>} - Created user object.
 */
const createUser = async (data) => {
  if (data.name) data.name = encryptData(data.name);
  if (data.email) data.email = encryptData(data.email);
  if (data.password) data.password = encryptData(data.password);
  return prisma.user.create({ data });
};

module.exports = createUser;
