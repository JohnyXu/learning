const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const postRoute = require('./routes/posts');
const conversationRoute = require('./routes/conversations');
const messageRoute = require('./routes/messages');
const multer = require('multer');
const path = require('path');
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {}, () => {
  console.log('connected to MongoDB');
});

app.use('/images', express.static(path.join(__dirname, 'public/images')));
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('destination');
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post('/api/upload', upload.single('file'), (req, res) => {
  try {
    return res.status(200).json('File uploaded successfully.');
  } catch (error) {
    console.log(error);
  }
});

// CORS configuration
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));
app.get('/', (req, res) => {
  res.send('welcome to homepage');
});

app.get('/users', (req, res) => {
  res.send('welcome to user page');
});

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);
app.use('/api/posts', postRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);

app.listen(8800, () => {
  console.log('backend is running!');
});
