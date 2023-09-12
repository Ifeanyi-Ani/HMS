const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const crypto = require('crypto');
//this is their shared details
const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, 'please enter your first name'],
    },
    lastname: {
      type: String,
      required: [true, 'please enter your last name'],
    },
    email: {
      type: String,
      required: [true, 'please enter your email'],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'please provide a valid email'],
    },
    gender: {
      type: String,
      required: [true, 'please enter your gender'],
      lowercase: true,
      enum: ['male', 'female'],
    },
    phone: { type: Number },
    password: {
      type: String,
      select: false,
      required: [true, 'password is required'],
    },
    confirmPassword: {
      type: String,
      validate: {
        validator: function (el) {
          return el === this.password;
        },
        message: 'password are not the same',
      },
    },
    // passwordChangeAt: Date,
    image: {
      type: String,
    },
    role: {
      type: String,
      required: true,
      lowercase: true,
      enum: [
        'receptionist',
        'patient',
        'doctor',
        'nurse',
        'accountant',
        'pharmacist',
        'admin',
      ], // Add more roles as needed
    },
    isban: { type: Boolean, default: false },
    dob: {
      type: Date,
      required: [true, 'enter date of birth'],
    },
    address: {
      type: String,
      required: [true, 'enter address'],
    },
    city: { type: String },
    country: { type: String },
    passwordResetToken: String,
    passwordResetExpires: Date,
  },

  { timestamps: true }
);

//manipulating before saving it to the Schema
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  // hash password
  const salt = await bcrypt.genSalt(12);
  this.password = await bcrypt.hash(this.password, salt);

  // removed the confirmPassword from the schema
  this.confirmPassword = undefined;
  next();
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  try {
    return await bcrypt.compare(candidatePassword, userPassword);
  } catch (error) {
    console.log(error);
  }
};
// userSchema.methods.changePasswordAfter = function (JWTTimestamp) {
//   if (this.passwordChangeAt) {
//     const changeTimestamp = parseInt(
//       this.passwordChangeAt.getTime() / 1000,
//       10
//     );

//     return JWTTimestamp < changeTimestamp;
//   }
//   return false;
// };
userSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString('hex');
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};

module.exports = mongoose.model('User', userSchema);
