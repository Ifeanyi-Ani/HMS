const dotenv = require('dotenv');
const cloudinaryModule = require('cloudinary');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

dotenv.config();
const cloudinary = cloudinaryModule.v2;
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_SECRET_KEY,
});
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'photo',
    allowedFormats: ['jpeg', 'png', 'jpg'],
  },
});

module.exports = {
  storage,
};
