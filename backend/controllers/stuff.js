const Thing = require('../models/thing');

exports.createThing = (req, res, next) => {
  console.log('Requête POST reçue:', req.body);
  const thing = new Thing({
    ...req.body
  });
  thing.save()
    .then(() => {
      console.log('Objet enregistré avec succès !');
      res.status(201).json({ message: 'Objet enregistré !'});
    })
    .catch(error => {
      console.error('Erreur lors de l\'enregistrement de l\'objet :', error);
      res.status(400).json({ error: error.message });
    });
};

exports.getElement = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then(thing => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};

exports.getAllElement = (req, res, next) => {
  Thing.find()
    .then(things => res.status(200).json(things))
    .catch(error => res.status(400).json({ error }));
};