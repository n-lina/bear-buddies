const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    requesterID: {
        type: String,
        required: true
    },
    taskRequester: {
        type: String, // username or id
        required: true,
    },
    taskDoer: {
        type: String, // username or id
        required: false,
    },
    status: {
        type: String,
        enum: ['OPEN', 'IN-PROGRESS', 'DONE'],
        default: 'OPEN',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    dueDate: {
        type: Date,
        required: true,
    },
    startLoc: {
        type: [Number], // [lat, lng]
        required: true,
    },
    endLoc: {
        type: [Number], // [lat, lng]
        required: true,
    },
}, {
    timestamps: true, // auto add fields for creation and modification times
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;