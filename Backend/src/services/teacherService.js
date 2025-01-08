const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all teachers
exports.getAllTeachers = async () => {
  return await prisma.user.findMany({
    where: { role: "teacher" },
  });
};

// Create a new teacher
exports.createTeacher = async (data) => {
  // Ensure the role is set to "teacher"
  return await prisma.user.create({
    data: { ...data, role: "teacher" },
  });
};

// Update a teacher
exports.updateTeacher = async (id, data) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Delete a teacher
exports.deleteTeacher = async (id) => {
  return await prisma.user.delete({
    where: { id: parseInt(id) },
  });
};
