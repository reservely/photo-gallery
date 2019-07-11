import React from 'react';
import styles from '../styles/App.css';
import Grid from './Grid.jsx';
// import { REFUSED } from 'dns';

// const App = () => (
//       <Grid />
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(event) {
    console.log('EVENT RAN BRO');
    console.log(event);
  }


  render() {
    return (
      <Grid handleImageClick={this.handleImageClick}/>
    )
  }
}

export default App;

{/* <div className="Photos">
<header className={styles["App-header"]}>
  <Grid />
</header>
</div> */}