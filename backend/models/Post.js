const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    nom: {
        type: String,
        required: true
    },
    bracerie: {
        type: String,
        required: true
    },
    consommation: {
        type: String,
        required: true
    },
    dateCreation: {
        type: String,
        required: true
    },
    degre: {
        type: String,
        required: true
    },
    specialisation: {
        type: String,
        required: true
    },
    consommationFrance: {
        type: String,
        required: true
    },
    producteurFrance: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Posts', PostSchema);