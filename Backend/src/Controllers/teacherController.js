const teacherService = require("../services/teacherService");

// Get all teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await teacherService.getAllTeachers();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: "Error fetching teachers" });
  }
};

// Create a new teacher
exports.createTeacher = async (req, res) => {
  const { name, email } = req.body;

  try {
    const newTeacher = await teacherService.createTeacher({ name, email });
    res.json(newTeacher);
  } catch (error) {
    res.status(500).json({ error: "Error creating teacher" });
  }
};

// Update a teacher
exports.updateTeacher = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedTeacher = await teacherService.updateTeacher(id, {
      name,
      email,
    });
    res.json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: "Error updating teacher" });
  }
};

// Delete a teacher
exports.deleteTeacher = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedTeacher = await teacherService.deleteTeacher(id);
    res.json(deletedTeacher);
  } catch (error) {
    res.status(500).json({ error: "Error deleting teacher" });
  }
};
