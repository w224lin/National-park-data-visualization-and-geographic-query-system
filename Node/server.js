const express = require('express');
const mongoose = require('mongoose');
const NPS = require('./models/Item');

const app = express();

// connect MongoDB Atlas
const uri = "Please Email the author for DataBase username and PassWord or You can use the data in your own cloud DB.";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// CORS Support.
const cors = require('cors');
app.use(cors());


// API route
app.get('/api/items', async (req, res) => {
    try {
      const items = await NPS.find();
      console.log('Items:', items); 
      res.json(items);
      console.log("Back-end data import JSON file successfully.");
    } catch (err) {
      console.error('Error fetching items:', err);
      res.status(500).send('Server error');
    }
});


app.get('/show', (req, res) => {
    
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
