const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require("./routes/authRoutes");
const connectToMongoDB = require('./database/dbConnection');
const multer = require('multer'); // Import Multer for file uploads

dotenv.config();

const app = express();
const PORT = 3000;

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Adjust to your React app's origin
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Express middleware for parsing JSON body data
app.use(express.json());

// Connect to MongoDB database (assuming a working `connectToMongoDB` function)
connectToMongoDB(); // Ensure proper connection handling

// Multer configuration for file uploads (adjust as needed)
const upload = multer({ dest: 'uploads/' }); // Change 'uploads/' to your desired storage location

// Auth routes with Multer middleware for handling profile picture uploads
app.use('/api/user', upload.single('pic'), authRoutes); // Modify route path if needed

// Error handling middleware (optional)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
  });

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
