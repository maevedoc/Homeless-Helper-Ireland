const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const services = require('./services.json');

app.get('/services', (req, res) => {
  res.json(services);
});

app.post('/help-request', (req, res) => {
  const { name, location, helpType, contact } = req.body;
  console.log('Help request:', { name, location, helpType, contact });
  res.json({ status: 'Request received' });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
