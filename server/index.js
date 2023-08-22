import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

const app = express();
const PORT = process.env.PORT || 4000;
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.status(200).json({ message: 'app is working' });
});
app.all('*', (req, res, next) => {
  next(
    res
      .status(404)
      .json({ message: `can't find ${req.originalUrl} on this server` })
  );
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
