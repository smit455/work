const express = require('express');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const { getUsers, createUser } = require('../controllers/userController');
const {loginAdmin} = require('../controllers/adminController')

require('dotenv').config(); // Load environment variables

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',
    },
});

const upload = multer({ storage: storage });

router.post('/admin/login', loginAdmin);
router.get('/getuser', getUsers);
router.post('/newuser', upload.array('images',100), createUser);

module.exports = router;
