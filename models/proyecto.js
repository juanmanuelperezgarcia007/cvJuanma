const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let proyectosSchema = new Schema({
    titulo: String
});

module.exports = mongoose.model('Proyecto', proyectosSchema);