import React from 'react';
import Grid from './Grid.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(event) {
    console.log(event);
  }


  render() {
    return (
      <Grid handleImageClick={this.handleImageClick}/>
    )
  }
}

export default App;