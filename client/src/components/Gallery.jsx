import React from 'react';
import Grid from './Grid.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ["https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg",
              "https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg",
              "https://www.telegraph.co.uk/content/dam/Pets/spark/pets-at-home-2017/fluffy-white-puppy.jpg?imwidth=450",
              "https://cdn2-www.dogtime.com/assets/uploads/gallery/30-impossibly-cute-puppies/impossibly-cute-puppy-2.jpg",
              "https://images.pexels.com/photos/1420405/pexels-photo-1420405.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
              "https://static1.squarespace.com/static/59d7eb2b268b96ed79bacaef/t/5c16a42e562fa7836b336a11/1544987802286/goldendoodle_puppy.jpeg",
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5LRtfc2XFHoHkhf3rCa-rVEEJmrj6u83b9Uv0pUbrBmTVObBg",
              "https://secure.img1-fg.wfcdn.com/im/27616071/compr-r85/3125/31254990/dalmatian-puppy-statue.jpg",
              "https://pupbox.com/wp-content/themes/pupbox-jb/assets/blog.v2/posts-by-age/puppy-running2.jpg"]
    };

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(event) {
    console.log(event.target.value);
  }


  render() {
    return (
      <Grid handleImageClick={this.handleImageClick} photos={this.state.photos}/>
    );
  }
}

export default Gallery;
