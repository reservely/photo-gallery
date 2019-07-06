const request = require('request');
const config = require('../config/pexelConfig.js');

let getImages = (callback) => {

  let options = {
    url: `https://api.pexels.com/v1/search?query=dining&per_page=15`,
    headers: {
      'Authorization': `${config.key}`
    }
  };

  request.get(options,(error, response, body) => {
    if (!error && response.statusCode == 200) {
      console.log(response.headers)
      //var info = JSON.parse(body);
      //var images = info.photos.map(photo => photo.url);
      //callback(images);
    }
  });
};

getImages(()=>{});
//getImages((data)=> console.log(data));
module.exports.getImages = getImages;