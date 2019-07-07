const request = require('request');
const config = require('../config/pexelConfig.js');

const getImages = (callback) => {

  //change page and per_page number
  const options = {
    url: `https://api.pexels.com/v1/search?page=3&query=dining&per_page=80`,
    headers: {
      'Authorization': `${config.key}`
    }
  };

  request.get(options, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const info = JSON.parse(body);
      const images = info.photos.map(photo => photo.id);
      callback(images);
    }
  });
};

module.exports.getImages = getImages;