const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')));

// API Routes
app.post('/api/contact', (req, res) => {
  const { firstName, lastName, email, phone, company, interest, message } = req.body;
  
  console.log('Contact form submission:', {
    firstName,
    lastName,
    email,
    phone,
    company,
    interest,
    message
  });
  
  // In production, you would send an email or save to database here
  res.json({ success: true, message: 'Thank you for contacting us. We will get back to you soon!' });
});

app.post('/api/careers', (req, res) => {
  const { name, email, phone, position, linkedin, coverLetter } = req.body;
  
  console.log('Career application submission:', {
    name,
    email,
    phone,
    position,
    linkedin
  });
  
  // In production, you would process the resume upload and save to database
  res.json({ success: true, message: 'Thank you for your application. We will review it and get back to you!' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
