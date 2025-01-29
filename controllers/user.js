const User = require('../models/user')
const { v4: uuidv4 } = require('uuid');

exports.createUser = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        const id = uuidv4();
        const user = await User.findOne({ where: { email } });
        if (user) {
            return res.status(403).json('User with email already exist')
        }

        const newUser = await User.create({ id, fullname, email, password });
        return res.status(200).json({
            message: 'User created successfully',
            data: newUser
        })
    } catch (error) {
        res.status(200).json({
            message: 'Internal server error',
            data: error.message
        })
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(403).json('Wrong email or password');
        }

        if (password !== user.password) {
            return res.status(403).json('Wrong password');
        }

        return res.status(200).json({
            message: 'Login successful',
            data: user
        })
    } catch (error) {
        res.status(200).json({
            message: 'Internal server error',
            data: error.message
        })
    }
};

