import React from 'react';
import axios from 'axios';
import Grid from './Grid.jsx';
import styles from '../styles/Grid.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ['https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg',
        'https://resizer.otstatic.com/v2/photos/wide-huge/25110695.jpg',
        'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        'https://assets.marthastewart.com/styles/wmax-570/d50/chocolate-labrador-dog-puppy-rubber-duck-503937138/chocolate-labrador-dog-puppy-rubber-duck-503937138_sq.jpg?itok=BKTiHoCu',
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg',
        'https://s3.amazonaws.com/wmfeimages/wp-content/uploads/2018/09/27182802/4189366235_060e3e8e6f_z.jpg',
        'https://media2.s-nbcnews.com/j/newscms/2018_20/1339477/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg',
        'https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        'https://secure.img1-fg.wfcdn.com/im/27616071/compr-r85/3125/31254990/dalmatian-puppy-statue.jpg',
        'https://loremflickr.com/cache/resized/65535_48078364147_e8b2eda580_h_1280_284_nofilter.jpg',
        'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg',
        'https://loremflickr.com/cache/resized/65535_48078364147_e8b2eda580_h_1280_284_nofilter.jpg',
      ],
      modal: false,
      index: 0,
      flag: false,
    };
    this.handleImageClick = this.handleImageClick.bind(this);
    this.onClickForward = this.onClickForward.bind(this);
    this.onClickBack = this.onClickBack.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleFlag = this.handleFlag.bind(this);
  }

  componentDidMount() {
    this.handleImages(); // images takes awhile to load from S3 so commented
    window.addEventListener('keydown', this.handleKeyPress);
    window.focus();
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  onClickForward() {
    const { index, photos } = this.state;
    if (index + 1 === photos.length) {
      this.setState({
        index,
      });
    } else {
      this.setState({
        index: index + 1,
      });
    }
  }

  onClickBack() {
    const { index } = this.state;
    if (index - 1 === -1) {
      this.setState({
        index,
      });
    } else {
      this.setState({
        index: index - 1,
      });
    }
  }

  handleImageClick(e) {
    const { modal } = this.state;
    this.setState({
      modal: !modal,
      index: e,
    });
  }

  handleKeyPress(event) {
    if (event.keyCode === 37) {
      this.onClickBack();
    } else if (event.keyCode === 39) {
      this.onClickForward();
    } else if (event.keyCode === 27) {
      this.setState({ modal: false });
    }
  }

  handleImages() {
    let restaurantId = location.pathname.slice(1);
    restaurantId = parseInt(restaurantId);
    axios.get(`/${restaurantId}/images`)
      .then((response) => {
        const imageURL = response.data.map(x => x.image_url);
        this.setState({ photos: imageURL });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleFlag() {
    const { flag } = this.state;
    this.setState({ flag: !flag });   
  }

  render() {
    const {
      index, photos, modal, flag,
    } = this.state;
    return (
      <div>
        <div className={styles.big}>
          <div className={styles.ov}>
          </div>
          <div className={styles.desc}><img src='https://reservly-photos.s3-us-west-1.amazonaws.com/desc.png' />
          </div>
          <Grid handleFlag={this.handleFlag} handleKeyPress={this.handleKeyPress} index={index} photos={photos} onClickForward={this.onClickForward} onClickBack={this.onClickBack} handleImageClick={this.handleImageClick} modal={modal} flag={flag} />
        </div>
      </div>
    );
  }
}

export default Gallery;
