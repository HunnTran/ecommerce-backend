'use strict';
const Joi = require('joi');

const registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email không đúng định dạng (ví dụ: abc@example.com)',
    'any.required': 'Email là bắt buộc',
  }),
  password: Joi.string().min(6).required().messages({
    'string.min': 'Password phải có ít nhất 6 ký tự (ví dụ: 123456)',
    'any.required': 'Password là bắt buộc',
  }),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email không đúng định dạng (ví dụ: abc@example.com)',
    'any.required': 'Email là bắt buộc',
  }),
  password: Joi.string().required().messages({
    'string.min': 'Password phải có ít nhất 6 ký tự (ví dụ: 123456)',
    'any.required': 'Password là bắt buộc',
  }),
});

module.exports = { registerSchema, loginSchema };