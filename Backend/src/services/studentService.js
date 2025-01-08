const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Get all students
exports.getAllStudents = async () => {
  return await prisma.user.findMany({
    where: { role: "student" }, // Fetch only users with the role "student"
  });
};

// Create a new student
exports.createStudent = async (data) => {
  // Ensure the role is set to "student"
  return await prisma.user.create({
    data: { ...data, role: "student" },
  });
};

// Update a student
exports.updateStudent = async (id, data) => {
  return await prisma.user.update({
    where: { id: parseInt(id) },
    data,
  });
};

// Delete a student
exports.deleteStudent = async (id) => {
  return await prisma.user.delete({
    where: { id: parseInt(id) },
  });
};
