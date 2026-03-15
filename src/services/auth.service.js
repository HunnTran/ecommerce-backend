'use strict';
const bcrypt = require('bcryptjs');
const accountRepository = require('../repositories/account.repository');

const register = async ({ email, password }) => {
  const existingAccount = await accountRepository.findByEmail(email);
  if (existingAccount) {
    const error = new Error('Email already exists');
    error.statusCode = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newAccount = await accountRepository.create({
    email,
    password: hashedPassword,
    role_id: 2,
  });

  return {
    id: newAccount.id,
    email: newAccount.email,
  };
};

const jwt = require('jsonwebtoken');

const login = async ({ email, password }) => {
  const account = await accountRepository.findByEmail(email);
  if (!account) {
    const error = new Error('Email không tồn tại');
    error.statusCode = 404;
    throw error;
  }

  const isPasswordValid = await bcrypt.compare(password, account.password);
  if (!isPasswordValid) {
    const error = new Error('Mật khẩu không chính xác');
    error.statusCode = 401;
    throw error;
  }

  const token = jwt.sign(
    { id: account.id, role_id: account.role_id },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );

  return {
    token,
    account: {
      id: account.id,
      email: account.email,
      role_id: account.role_id,
    },
  };
};

module.exports = { register, login };