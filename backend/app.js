const express = require('express');
const app = express();
const mongoose = require('mongoose');

//import ROUTES of project 
const stuffRoutes = require('./routes/stuff');
const userRoutes = require('./routes/user');

const cors = require('cors');
app.use(express.json());
app.options('*', cors());

mongoose.connect('mongodb+srv://Marvin:Mdp(007)@cluster0.3pxms3u.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);

module.exports = app ;