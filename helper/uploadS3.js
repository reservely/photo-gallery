const AWS = require('aws-sdk');
const config = require('../config/config.js');
const request = require('request');

AWS.config.update({accessKeyId: `${config.AWSAccessKeyId}`, secretAccessKey: `${config.AWSSecretKey}`});

s3 = new AWS.S3({apiVersion: '2006-03-01'});
   
function put_from_url(callback) {
    request({
        url: 'https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg',
        encoding: null
    }, function(err, res, body) {
        if (err)
            return callback(err, res);

        s3.putObject({
            Bucket: 'reversly-photos',
            Key: 'test.jpg',
            ContentType: res.headers['content-type'],
            Body: body 
        }, callback);
    })
}
   
put_from_url(function(err, res) {
    if (err)
        throw err;

    console.log('Uploaded data successfully!');
});