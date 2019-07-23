const axios = require('axios');

module.exports = {
 getImages: (query, cb) => {
    const url = `https://api.unsplash.com/search/photos?query=${query}&per_page=30&orientation=landscape`;
    axios.get(url, { headers: { Authorization: `Client-ID d6f1a330b6a6e654df2278a04cbec1a1d668711570873af9b892ed060591c0c6` } })
      .then((response) => {
        const images = response.data.results.map(photo => photo.urls.small);
        cb(null, images);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

//getImages('dining',(err, data) => console.log(data.length));

