'use strict';
const authService = require('../services/auth.service');
const { registerSchema, loginSchema } = require('../utils/validation');

const register = async (req, res) => {
    try {

        const { error } = registerSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                message: error.details[0].message,
            });
        }

        const { email, password } = req.body;
        const result = await authService.register({ email, password });
        return res.status(201).json({
            message: 'Account created successfully',
            data: result,
        });
    } catch (error) {
        return res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};


const login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        message: error.details[0].message,
      });
    }

    const { email, password } = req.body;
    const result = await authService.login({ email, password });
    return res.status(200).json({
      message: 'Login successfully',
      data: result,
    });
  } catch (error) {
    return res.status(error.statusCode || 500).json({
      message: error.message,
    });
  }
};

module.exports = { register, login };
