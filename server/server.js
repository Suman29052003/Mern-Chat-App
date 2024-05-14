const express = require('express');
const cors = require('cors');
const multer = require('multer');
const authRoutes = require("./routes/authRoutes");
const connectToMongoDB = require('./database/dbConnection');
const dotenv = require('dotenv');
dotenv.config()


const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  }
});

app.use('/api/user', upload.single('pic'), authRoutes);

connectToMongoDB();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
