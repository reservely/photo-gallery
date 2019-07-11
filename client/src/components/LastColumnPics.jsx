import React , { Component } from 'react';
import styles from '../styles/Grid.css';

let LastColumnPics = (props) => {
  return (
    <React.Fragment>
      {console.log(props.handleImageClick)}
      <div className={styles.column3} onClick={(event) => {props.handleImageClick(event)}}>
        <div className={styles.box4}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='84'/></div>
        <div className={styles.box5}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='84'/></div>
        <div className={styles.box6}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='84'/></div>
      </div>
      <div className={styles.column4} onClick={(event) =>  {props.handleImageClick(event)}}>
        <div className={styles.box7}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='84'/></div>
        <div className={styles.box8}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='84'/></div>
        <div className={styles.box9}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='84'/></div>
      </div>
    </React.Fragment>
  )
}
export default LastColumnPics;