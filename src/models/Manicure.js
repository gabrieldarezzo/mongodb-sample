const { Schema, model } = require('mongoose');

const ManicureSchema = new Schema({
    nome : {
        type: String,
        required: true,
    },
    email : {
        type: String,
        required: true,
    },
    senha : {
        type: String,
        required: true,
    },
    locals: [{
        type: Schema.Types.ObjectId,
        ref: 'local',
    }],
}, {    
    timestamps: true,
});

module.exports = model('manicure', ManicureSchema);