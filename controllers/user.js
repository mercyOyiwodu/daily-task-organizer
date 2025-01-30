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
            return res.status(401).json({ message: 'Wrong email or password', error: true });
        }

        if (password !== user.password) {
            return res.status(401).json({ message: 'Wrong password', error: true });
        }

        const token = uuidv4();
        user.token = token;
        await user.save();

        return res.status(200).json({
            message: 'Login successful',
            data: user,
            token
        })
    } catch (error) {
        res.status(500).json({
            message: 'Internal server error',
            error: true,
            data: error.message
        })
    }
}