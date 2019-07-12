import React from 'react';
import Grid from './Grid.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: ['https://s.abcnews.com/images/Lifestyle/puppy-ht-3-er-170907_4x3_992.jpg',
                'https://img.purch.com/w/660/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4OC85MTEvb3JpZ2luYWwvZ29sZGVuLXJldHJpZXZlci1wdXBweS5qcGVn',
                'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                'https://assets.marthastewart.com/styles/wmax-570/d50/chocolate-labrador-dog-puppy-rubber-duck-503937138/chocolate-labrador-dog-puppy-rubber-duck-503937138_sq.jpg?itok=BKTiHoCu',
                'https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/11/12193133/German-Shepherd-Puppy-Fetch.jpg',
                'https://s3.amazonaws.com/wmfeimages/wp-content/uploads/2018/09/27182802/4189366235_060e3e8e6f_z.jpg',
                'https://media2.s-nbcnews.com/j/newscms/2018_20/1339477/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-760w.jpg',
                'https://images.unsplash.com/photo-1526660690293-bcd32dc3b123?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
                'https://secure.img1-fg.wfcdn.com/im/27616071/compr-r85/3125/31254990/dalmatian-puppy-statue.jpg'  
                ],
      modal: false,
      image: '',
              }
    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(e) {
    this.setState({modal: !this.state.modal});
    this.setState({image: e});
  }

  render() {
    return (
      <Grid photos={this.state.photos} handleImageClick={this.handleImageClick} modal={this.state.modal} image={this.state.image}/>
    )
  }
}

export default App;