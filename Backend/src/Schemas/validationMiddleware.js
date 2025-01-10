/**
 * @fileoverview User validation middleware for creation and update operations.
 */

const Joi = require("joi");

/**
 * Schema for validating user creation data.
 */
const userCreationSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid("ADMIN", "TEACHER", "STUDENT").required(),
});

/**
 * Schema for validating user update data.
 */
const userUpdateSchema = Joi.object({
  name: Joi.string().optional(),
  email: Joi.string().email().optional(),
  password: Joi.string().min(6).optional(),
  role: Joi.string().valid("ADMIN", "TEACHER", "STUDENT").optional(),
});

/**
 * Middleware to validate user creation data.
 * @function validateUserCreation
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user data.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
exports.validateUserCreation = (req, res, next) => {
  const { error } = userCreationSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

/**
 * Middleware to validate user update data.
 * @function validateUserUpdate
 * @param {Object} req - Express request object.
 * @param {Object} req.body - Request body containing user data.
 * @param {Object} res - Express response object.
 * @param {Function} next - Express next middleware function.
 * @returns {void}
 */
exports.validateUserUpdate = (req, res, next) => {
  const { error } = userUpdateSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
