const Image = require('./image.js');
const db = require('./index.js');

function create() {
  const arr = [];

  //240 as the limit because there are 239 photos in S3
  for (let i = 0; i < 240; i++) {
    let randomInt = Math.floor(Math.random() * Math.floor(101));
    arr.push({
      restaurant_id: randomInt,
      image_url: 'https://reversly-photos.s3-us-west-2.amazonaws.com/' + i + '.jpg'
    });
  }

  return arr;
};

const sampleurls = create();

const insertImages = () => {
  Image.insertMany(sampleurls)
    .then(() => {
      console.log('successfully loaded')
      db.close();
    })
    .catch(() => {
      console.log('error');
      db.close();
    });
};

insertImages();