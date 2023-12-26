const mongoose = require('mongoose');

const thingSchema = mongoose.Schema({
  title: String,
  price: Number, 
});

// exportons ce schéma en tant que modèle Mongoose appelé « Thing », le rendant par là même disponible pour notre application Express.
module.exports = mongoose.model('Thing', thingSchema);

