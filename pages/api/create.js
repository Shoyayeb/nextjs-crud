const { MongoClient } = require("mongodb");

export default async function handler(req, res) {
    const uri = `mongodb+srv://<${process.env.DB_USERNAME}>:<${process.env.DB_PASSWORD}>@cluster0.4f4qc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    // mongodb config
    const client = new MongoClient(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    client.connect();
    const database = client.db("searchData");
    const dataCollection = database.collection("data");
    console.log('post', req.body);
    // set time from here
    if (req.method === 'POST') {
        // const project = await Project.create({
        //     name: req.body.name,
        //     type: req.body.type,
        //     color: req.body.color,
        //     admin: req.body.admin,
        //     users: req.body.users,
        //     created_at: req.body.created_at,
        //     updated_at: req.body.updated_at
        // });
        const projectData = {
            name: req.body.name,
            type: req.body.type,
            color: req.body.color,
            admin: req.body.admin,
            users: req.body.users,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at
        }
        dataCollection.insertOne(projectData).then((result) => {
            console.log(result);

        }).catch((err) => {
            console.log(err);

        });

    }
    res.status(200).json({ message: "ok", status: 200 });
}