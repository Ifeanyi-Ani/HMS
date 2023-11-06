const createError = require('http-errors');
const User = require('../models/users/User');
const { initializeApp } = require('firebase/app');
const {
  getDownloadURL,
  ref,
  uploadBytesResumable,
  getStorage,
} = require('firebase/storage');
const multer = require('multer');
const config = require('../utils/firebase');
initializeApp(config.firebaseConfig);
const storage = getStorage();
const upload = multer({ storage: multer.memoryStorage() });

exports.uploadPhoto = upload.single('image');
exports.upload = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (req.file) {
      const storageRef = ref(
        storage,
        `users/${req.file.originalname}  ${Math.random() * 20000}`
      );
      const metadata = req.file.mimtype;
      const snapshot = await uploadBytesResumable(
        storageRef,
        req.file.buffer,
        metadata
      );
      const downloadUrl = await getDownloadURL(snapshot.ref);

      req.body.image = downloadUrl;
      const user = await User.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!user) {
        return next(createError(404, 'user does not exist'));
      }
      res.status(200).json(user);
    } else {
      return next(createError(404, 'no file found'));
    }
  } catch (error) {
    next(error);
  }
};
