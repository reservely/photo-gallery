const AWS = require('aws-sdk');
const config = require('../config/config.js');

AWS.config.update({accessKeyId: `${config.AWSAccessKeyId}`, secretAccessKey: `${config.AWSSecretKey}`});

s3 = new AWS.S3({apiVersion: '2006-03-01'});

var params = { 
    Bucket: 'reversly-photos'
   }

s3.listObjects(params, function (err, data) {
    if(err)throw err;
    console.log(data.Contents.map( x => 'https://reversly-photos.s3-us-west-2.amazonaws.com/'+x.Key));
   });

// [ 'https://reversly-photos.s3-us-west-2.amazonaws.com/adult-alcohol-alcoholic-beverage-1850595.jpg',
// 'https://reversly-photos.s3-us-west-2.amazonaws.com/bread-cheese-cheese-platter-1893609.jpg',
// 'https://reversly-photos.s3-us-west-2.amazonaws.com/celebrate-celebration-cheers-1268558.jpg' ]