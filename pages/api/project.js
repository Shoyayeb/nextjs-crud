const mongoose = require('mongoose');
const Project = require('../../models/project.model');


mongoose.connect('mongodb://localhost:27017/projects').then(result => {
    console.log('DB connected');
}).catch(err => {
    console.log(err);
});

export default async function handler(req, res) {
    const project = await Project.create({
        name: "name"
    })
    res.json({ hello: 'world' });
}