const express = require('express');
const { addUser, getUser } = require('../controllers/userController');
const upload = require('../middleware/upload');

const router = express.Router();

router.post('/add', upload.single('profilePicture'), addUser);
router.get('/:id', getUser);

module.exports = router;
