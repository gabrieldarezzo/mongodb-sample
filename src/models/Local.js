const { Schema, model } = require('mongoose');

const LocalSchema = new Schema({  
    cep : {
        type: String,
        required: true,
    },
    rua : {
        type: String,
        required: true,
    },
    numero : {
        type: String,
        required: true,
    },
    bairro : {
        type: String,
        required: true,
    },
    cel : {
        type: String,
        required: true,
    },
    cidade : {
        type: String,
        required: true,
    },
    estado : {
        type: String,
        required: true,
    },
}, {    
    timestamps: true,
});

module.exports = model('local', LocalSchema);