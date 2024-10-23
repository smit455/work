const User = require('../models/User');

const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createUser = async (req, res) => {
    try {
        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ message: 'No files were uploaded.' });
        }

        const { name, socialMediaHandle } = req.body;
        const existingUser = await User.findOne({
            socialMediaHandle: { $regex: new RegExp(`^${socialMediaHandle}$`, 'i') }
        });

        if (existingUser) {
            return res.status(409).json({ message: 'User with this social media handle already exists.' });
        }

        const images = req.files.map((file) => file.path);

        const user = new User({
            name,
            socialMediaHandle,
            images,
        });

        await user.save();

        res.status(201).json(user);
    } catch (error) {
        console.error('Error creating user:', error); // Log the full error object
        res.status(500).json({ message: 'Server error', error: error instanceof Error ? error.message : String(error) });
    } 
};



module.exports = {
    getUsers,
    createUser,
};
