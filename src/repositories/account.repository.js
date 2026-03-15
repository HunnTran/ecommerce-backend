'use strict';
const Account = require('../models/account');

const findByEmail = async (email) => {
  return await Account.findOne({ where: { email } });
};

const create = async (data) => {
  return await Account.create(data);
};

module.exports = { findByEmail, create };