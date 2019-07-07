const AWS = require('aws-sdk');
const config = require('../config/config.js');
const request = require('request');
const pexel = require('./pexel.js');

AWS.config.update({
  accessKeyId: `${config.AWSAccessKeyId}`,
  secretAccessKey: `${config.AWSSecretKey}`
});

s3 = new AWS.S3({
  apiVersion: '2006-03-01'
});

function put_from_url(key, id, callback) {
  request({
    url: `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg`,
    encoding: null
  }, function (err, res, body) {
    if (err)
      return callback(err, res);

    s3.putObject({
      Bucket: 'reversly-photos',
      Key: `${key}.jpg`,
      ContentType: res.headers['content-type'],
      Body: body
    }, callback);
  })
}

//manually change the key value
pexel.getImages(data => {
  let key = 160;
  data.forEach(x => {
    put_from_url(key++, x, (err, info) => {
      if (err) console.log(err)
      console.log('successful in uploading')
    })
  })
});