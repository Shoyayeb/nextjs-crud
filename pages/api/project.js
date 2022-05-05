const mongoose = require('mongoose');
const Project = require('../../models/project.model');


mongoose.connect('mongodb://localhost:27017/projects').then(result => {
    console.log('DB connected');
}).catch(err => {
    console.log(err);
});

export default async function handler(req, res) {
    console.log('post', req.body);

    if (req.method === 'POST') {
        const project = await Project.create({
            name: req.body.name,
            type: req.body.type,
            color: req.body.color,
            admin: req.body.admin,
            users: req.body.users,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at
        });
        res.json({ message: "ok", status: 200 });
    } else {
        res.json({ message: "Valo kaj kortesen, kore jan" })
    }
}