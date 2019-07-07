const AWS = require('aws-sdk');
const config = require('../config/config.js');

AWS.config.update({
  accessKeyId: `${config.AWSAccessKeyId}`,
  secretAccessKey: `${config.AWSSecretKey}`
});

s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});

var params = {
  Bucket: 'reservly-photos'
}

s3.listObjects(params, function (err, data) {
  if (err) throw err;
  console.log(data.Contents.map(x => 'https://reservly-photos.s3-us-west-1.amazonaws.com/' + x.Key));
});