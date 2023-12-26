const express = require ('express');
const router = express.Router();
const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff')

router.post('/', stuffCtrl.createThing);

router.get('/:id', stuffCtrl.getElement );

router.use('/', stuffCtrl.getAllElement);

module.exports = router;