const mongoose = require('mongoose');

const MarcaSchema =  new mongoose.Schema({
    nome : String,
    thumb : String,
});

module.exports = mongoose.model('Marca', MarcaSchema);