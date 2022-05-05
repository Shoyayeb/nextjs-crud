const mongoose = require('mongoose');

// id, name, type, created_at, updated_at, admin, users, color
const Project = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    admin: { type: Boolean, required: true },
    users: { type: Array, required: true },
    created_at: { type: Date, required: true },
    updated_at: { type: Date, default: Date.now, required: true },

}, { collection: 'projects' });

const model = mongoose.model('ProjectData', Project);
module.exports = model;