const express = require('express');
const cors = require('cors');
const app = express();
const port = 8000;

// Import routes
const profileRoutes = require('./routes/profiles');
const skillRoutes = require('./routes/skills');
// const projectRoutes = require('./routes/projects');

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS
app.use(cors());

// Use routes
app.use('/profiles', profileRoutes);
app.use('/skills', skillRoutes);
// app.use('/projects', projectRoutes);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
