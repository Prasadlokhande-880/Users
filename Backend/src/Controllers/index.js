/**
 * Module for handling user-related operations.
 *
 * This module exports functions for performing CRUD operations on users,
 * including retrieving all users, updating a user, retrieving users by role,
 * deleting a user, and creating a user.
 *
 * @module userController
 */

const getAllUsers = require("./getAllUsers");
const updateUser = require("./updateUser");
const getUsersByRole = require("./getUserByRole");
const deleteUser = require("./deleteUser");
const createUser = require("./createUser");

module.exports = {
  /**
   * @function getAllUsers
   * @description Retrieves all users from the database.
   */
  getAllUsers,

  /**
   * @function updateUser
   * @description Updates a user's details in the database.
   */
  updateUser,

  /**
   * @function getUsersByRole
   * @description Retrieves users by their role from the database.
   */
  getUsersByRole,

  /**
   * @function deleteUser
   * @description Deletes a user from the database.
   */
  deleteUser,

  /**
   * @function createUser
   * @description Creates a new user in the database.
   */
  createUser,
};
