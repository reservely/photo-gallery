import React , { Component } from 'react';
import styles from '../styles/Grid.css';

let LastColumnPics = ({photos, handleImageClick}) => {
  return (
    <React.Fragment>
      <div className={styles.column3}>
        <div className={styles.box4}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='82.3' width='82.3' onClick={(event) => {handleImageClick(event)}}/></div>
        <div className={styles.box5}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='82.3' width='82.3' onClick={(event) => {handleImageClick(event)}}/></div>
        <div className={styles.box6}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='82.3' width='82.3' onClick={(event) => {handleImageClick(event)}}/></div>
      </div>
      <div className={styles.column4}>
        <div className={styles.box7}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='82.3' width='82.3' onClick={(event) => {handleImageClick(event)}}/></div>
        <div className={styles.box8}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='82.3' width='82.3' onClick={(event) => {handleImageClick(event)}}/></div>
        <div className={styles.box9}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='82.3' width='82.3' onClick={(event) => {handleImageClick(event)}}/></div>
      </div>
    </React.Fragment>
  )
}
export default LastColumnPics;