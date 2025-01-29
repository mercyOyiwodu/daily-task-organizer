const express = require('express');
const { createUser, login } = require('../controllers/user');

const router = express.Router();

router.post('/users', createUser)
router.post('/users/login', login)

module.exports = router;
