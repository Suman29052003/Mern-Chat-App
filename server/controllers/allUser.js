const asyncHandler = require('express-async-handler');
const User = require('../models/user.model');

const allUser = asyncHandler(async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, token missing or invalid' });
    }

    const keyword = req.query.search ? {
        $or: [
            { name: { $regex: req.query.search, $options: 'i' } },
            { email: { $regex: req.query.search, $options: 'i' } },
        ]
    } : {};

    try {
        const users = await User.find({ ...keyword, _id: { $ne: req.user._id } }).select('-password');
        res.status(200).json(users);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

module.exports = allUser;
