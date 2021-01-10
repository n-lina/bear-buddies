const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);
const Schema = mongoose.Schema;

const userSchema = new Schema({
    requesterID: {
        type: String,
        required: true,
        unique: true
    },
    level: {
        type: Number,
        required: true,
    },
    experience: {
        type: Number,
        required: false,
    },
    animalName: {
        type: String,
        required: true,
    },
    fullness: {
        type: Number,
        required: false,
    },
    happiness: {
        type: Number,
        required: true,
    },
    cleanliness: {
        type: Number,
        required: true,
    },
    energy: {
        type: Number,
        required: true
    },
    calmness: {
        type: Number,
        required: true
    },
    health: {
        type: Number,
        required: true
    },
    lastLoggedIn: {
        type: Number,
        required: false
    }
}, {
    timestamps: true, // auto add fields for creation and modification times
});

const User = mongoose.model('User', userSchema);

module.exports = User;