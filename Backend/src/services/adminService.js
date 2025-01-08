const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all admins
exports.getAllAdmins = async () => {
  return await prisma.user.findMany({
    where: { role: "admin" },
  });
};

// Create a new admin
exports.createAdmin = async (data) => {
  return await prisma.user.create({
    data: { ...data, role: "admin" },
  });
};

// Update an admin
exports.updateAdmin = async (id, data) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Delete an admin
exports.deleteAdmin = async (id) => {
  return await prisma.user.delete({
    where: { id: parseInt(id) },
  });
};
