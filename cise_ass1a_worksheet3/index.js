// app.js

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const books = require('./routes/api/books');

const app = express();

connectDB();

//cors
app.use(cors({ origin: true, credentials: true }));

//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

//routes
app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log('server running on port ${port}'));