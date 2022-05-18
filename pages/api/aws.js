const AWS = require('aws-sdk');


// {
//     accessKeyId: process.env.AWS_ACCESS_KEY,
//     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
// }
export default async function handler(req, res) {
    AWS.config.update({
        accessKeyId: process.env.AWS_ACCESS_KEY,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    });
    const s3 = new AWS.S3();
    const params = {
        Body: "hello world",
        Bucket: "shafins-bucket",
        Key: "mytext.txt",
    }
    s3.putObject(params, function (err, data) {
        if (err) console.log(err, err.stack);
        else console.log(data)
    });
    console.log('putting object');

    res.status(200).json({ message: process.env.AWS_ACCESS_KEY, status: 200 });
}