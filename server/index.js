const createError = require('http-errors');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const hospitalRoutes = require('./routes/hospitalRoutes');
const {
  receptionistRoutes,
  patientRoutes,
  nurseRoutes,
  doctorRoutes,
  userRoutes,
} = require('./routes/users/index');
const { login } = require('./controllers/authControllers');
const wardRoutes = require('./routes/Ward');
const bedRoutes = require('./routes/Bed');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/hospitals', hospitalRoutes);
app.use('/receptionists', receptionistRoutes);
app.use('/patients', patientRoutes);
app.use('/nurses', nurseRoutes);
app.use('/doctors', doctorRoutes);
app.use('/users', userRoutes);
app.post('/login', login);
app.use('/wards', wardRoutes);
app.use('/beds', bedRoutes);
app.all('*', (req, res, next) => {
  next(createError(404, `can't find ${req.originalUrl} on this server`));
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status || 500,
    message: err.message,
  });
});

mongoose.connect(process.env.CON_STR, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on('open', () =>
  console.log('server is connected successfully')
);
mongoose.connection.on('error', error => console.log(error));

app.listen(PORT, () => console.log(`app is running on ${PORT}`));
