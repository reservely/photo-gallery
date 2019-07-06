const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/images', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

const imageSchema = new mongoose.Schema({
  restaurant_id: Number,
  image_url: { type: String, unique: true },
  created_at: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;