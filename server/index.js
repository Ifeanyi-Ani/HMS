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

app.use('/api/v1/hospitals', hospitalRoutes);
app.use('/api/v1/receptionists', receptionistRoutes);
app.use('/api/v1/patients', patientRoutes);
app.use('/api/v1/nurses', nurseRoutes);
app.use('/api/v1/doctors', doctorRoutes);
app.use('/api/v1/users', userRoutes);
app.post('/api/v1/login', login);
app.use('/api/v1/wards', wardRoutes);
app.use('/api/v1/beds', bedRoutes);
app.all('*', (req, res, next) => {
  next(
    res
      .status(404)
      .json({ message: `can't find ${req.originalUrl} on this server` })
  );
});
app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  res.status(err.statusCode).json({
    status: err.status,
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
