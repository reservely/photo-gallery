const AWS = require('aws-sdk');
const config = require('./config.js');

AWS.config.update({accessKeyId: `${config.AWSAccessKeyId}`, secretAccessKey: `${config.AWSSecretKey}`});

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

var params = { 
    Bucket: 'reversly-photos'
   }

s3.listObjects(params, function (err, data) {
    if(err)throw err;
    console.log(data.Contents.map( x => 'https://reversly-photos.s3-us-west-2.amazonaws.com/'+x.Key));
   });

   