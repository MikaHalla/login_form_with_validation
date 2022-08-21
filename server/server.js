const express = require('express');
const dotenv = require('dotenv').config();
const colors = require('colors');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const connectDB = require('./config/db');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB();

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () =>
  console.log(
    `Server running on ${process.env.PORT} port in ${process.env.NODE_ENV} mode.`
      .cyan.bold
  )
);
