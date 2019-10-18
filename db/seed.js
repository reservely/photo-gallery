const Image = require('./image.js');
const db = require('./index.js');
const unsplash = require('../helper/unsplashHelper.js');

function create() {
  const arr = [];

  for (let i = 0; i < 99; i++) {
    let count = 0;

    while (count<15){
      let randomInt = Math.floor(Math.random() * Math.floor(29));
      arr.push({
        restaurant_id: `${i}`,
        //image_url: array[randomInt],
        image_url: `https://reservly-photos.s3-us-west-1.amazonaws.com/${randomInt}.jpg`,
      });
      count++;
    }
  }

  // for (let i = 0; i < 240; i++) {
  //   const randomInt = Math.floor(Math.random() * Math.floor(101));
  //   arr.push({
  //     restaurant_id: randomInt,
  //     image_url: `https://reservly-photos.s3-us-west-1.amazonaws.com/${i}.jpg`,
  //   });
  // }
  return arr;
}


create()

// unsplash.getImages('dining', (err, data) => {
//     insertImages(create(data));
// });

const insertImages = (urls) => {
  Image.insertMany(urls)
    .then((err) => {
      if (err) {
        console.log(err)
        db.close();
      }
      else {
      console.log('successfully loaded');
      }
    })
    .catch((err) => {
      console.log('error');
      db.close();
    });
};

insertImages();
