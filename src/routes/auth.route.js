'use strict';
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { authenticate } = require('../middlewares/auth.middleware');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/me', authenticate, (req, res) => {
    return res.status(200).json({
        message: 'Xác thực thành công',
        data: req.account,
    });
});

module.exports = router;

