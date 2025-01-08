const studentService = require("../services/studentService");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await studentService.getAllStudents();
    res.json(students);
  } catch (error) {
    res.status(500).json({ error: "Error fetching students" });
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  const { name, email } = req.body;

  try {
    const newStudent = await studentService.createStudent({ name, email });
    res.json(newStudent);
  } catch (error) {
    res.status(500).json({ error: "Error creating student" });
  }
};

// Update a student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedStudent = await studentService.updateStudent(id, {
      name,
      email,
    });
    res.json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: "Error updating student" });
  }
};

// Delete a student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedStudent = await studentService.deleteStudent(id);
    res.json(deletedStudent);
  } catch (error) {
    res.status(500).json({ error: "Error deleting student" });
  }
};
