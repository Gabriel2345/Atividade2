const mongoose = require('mongoose');

const VeiculoSchema =  new mongoose.Schema({
    nome : String,
    motor : String,
    portas : Number,
    cor : String,
    combustivel : String,
    ano_fabricacao : Number,
    ano_modelo : Number,
    thumb : String,
    placa : String,
});

module.exports = mongoose.model('Veiculo', VeiculoSchema);