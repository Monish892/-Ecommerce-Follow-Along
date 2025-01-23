const User = require('../models/user');

const addUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const profilePicture = req.file?.path;

        const newUser = new User({ name, email, password, profilePicture });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error });
    }
};

module.exports = { addUser, getUser };
