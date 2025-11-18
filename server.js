const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Read companies data from db.json
function getCompanies() {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'db.json'), 'utf-8');
    return JSON.parse(data).companies;
  } catch (error) {
    console.error('Error reading db.json:', error);
    return [];
  }
}

// API Routes
// GET all companies
app.get('/api/companies', (req, res) => {
  const companies = getCompanies();
  res.json(companies);
});

// GET single company by ID
app.get('/api/companies/:id', (req, res) => {
  const companies = getCompanies();
  const company = companies.find(c => c.id === parseInt(req.params.id));
  
  if (company) {
    res.json(company);
  } else {
    res.status(404).json({ error: 'Company not found' });
  }
});

// Serve React build files in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'build')));
  
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`API available at http://localhost:${PORT}/api/companies`);
});

