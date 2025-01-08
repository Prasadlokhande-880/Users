// Joi Schemas for Validation
export const createAdminSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    "string.base": `"name" should be a string`,
    "string.empty": `"name" cannot be empty`,
    "string.min": `"name" should have at least {#limit} characters`,
    "string.max": `"name" should have at most {#limit} characters`,
    "any.required": `"name" is a required field`,
  }),
  email: Joi.string().email().required().messages({
    "string.base": `"email" should be a string`,
    "string.email": `"email" must be a valid email`,
    "string.empty": `"email" cannot be empty`,
    "any.required": `"email" is a required field`,
  }),
  password: Joi.string().min(6).required().messages({
    "string.base": `"password" should be a string`,
    "string.empty": `"password" cannot be empty`,
    "string.min": `"password" should have at least {#limit} characters`,
    "any.required": `"password" is a required field`,
  }),
});

export const updateAdminSchema = Joi.object({
  name: Joi.string().min(3).max(50).optional().messages({
    "string.base": `"name" should be a string`,
    "string.min": `"name" should have at least {#limit} characters`,
    "string.max": `"name" should have at most {#limit} characters`,
  }),
  email: Joi.string().email().optional().messages({
    "string.base": `"email" should be a string`,
    "string.email": `"email" must be a valid email`,
  }),
  password: Joi.string().min(6).optional().messages({
    "string.base": `"password" should be a string`,
    "string.min": `"password" should have at least {#limit} characters`,
  }),
});
