const userService = require("../services/userService");

// Get all admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await userService.getAllUsers({ role: "admin" });
    res.json(admins);
  } catch (error) {
    res.status(500).json({ error: "Error fetching admins" });
  }
};

// Create a new admin
exports.createAdmin = async (req, res) => {
  const { name, email, role } = req.body;

  // Ensure the role is always set to "admin"
  if (role !== "admin") {
    return res.status(400).json({ error: "Invalid role for admin creation" });
  }

  try {
    const newAdmin = await userService.createUser({
      name,
      email,
      role: "admin",
    });
    res.json(newAdmin);
  } catch (error) {
    res.status(500).json({ error: "Error creating admin" });
  }
};

// Update an admin
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedAdmin = await userService.updateUser(id, { name, email });
    res.json(updatedAdmin);
  } catch (error) {
    res.status(500).json({ error: "Error updating admin" });
  }
};

// Delete an admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedAdmin = await userService.deleteUser(id);
    res.json(deletedAdmin);
  } catch (error) {
    res.status(500).json({ error: "Error deleting admin" });
  }
};
