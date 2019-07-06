const Image = require('./image.js');
const db = require('./index.js');

const sampleurls = [
  {
    restaurant_id: 1, 
    image_url:'https://reversly-photos.s3-us-west-2.amazonaws.com/adult-alcohol-alcoholic-beverage-1850595.jpg'
  },
  {
    restaurant_id: 1, 
    image_url:'https://reversly-photos.s3-us-west-2.amazonaws.com/bread-cheese-cheese-platter-1893609.jpg'
  },
  {
    restaurant_id: 1, 
    image_url:'https://reversly-photos.s3-us-west-2.amazonaws.com/celebrate-celebration-cheers-1268558.jpg'
  } 
];

const insertImages = () => {
  Image.insertMany(sampleurls)
  .then(() => db.close())
  .catch(()=> {
        console.log('error');
        db.close();
        });
};
  
insertImages();