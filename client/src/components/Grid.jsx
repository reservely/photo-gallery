import React from 'react';
import styles from '../styles/Grid.css';
import Modal from './Modal.jsx';

const Grid = ({image, modal, photos, handleImageClick}) => {

    const imgURL = [];
    {photos.map(photo => imgURL.push(photo))};

    return (
      <div className={styles.wrapper}>
        <div className={[styles.column1]}>
          <div className={[styles.box1]}><img src={imgURL[0]} height='124.45' width='124.45' onClick={() => {handleImageClick(imgURL[0])}}/></div>
          <div className={styles.box2}><img src={imgURL[1]}  height='124.45' width='124.45' onClick={() => {handleImageClick(imgURL[1])}}/></div>
        </div>
        <div className={styles.column2}>
          <div className={styles.box3}><img src={imgURL[2]}  height='253.92' width='253.92' onClick={() => {handleImageClick(imgURL[2])}}/></div>
        </div>
        <div className={styles.column3}>
          <div className={styles.box4}><img src={imgURL[3]}  height='82.3' width='82.3' onClick={() => {handleImageClick(imgURL[3])}}/></div>
          <div className={styles.box5}><img src={imgURL[4]}  height='82.3' width='82.3' onClick={() => {handleImageClick(imgURL[4])}}/></div>
          <div className={styles.box6}><img src={imgURL[5]}  height='82.3' width='82.3' onClick={() => {handleImageClick(imgURL[5])}}/></div>
        </div>
        <div className={styles.column4}>
          <div className={styles.box7}><img src={imgURL[6]}  height='82.3' width='82.3' onClick={() => {handleImageClick(imgURL[6])}}/></div>
          <div className={styles.box8}><img src={imgURL[7]}  height='82.3' width='82.3' onClick={() => {handleImageClick(imgURL[7])}}/></div>
          <div className={styles.box9}><img src={imgURL[8]}  height='82.3' width='82.3' onClick={() => {handleImageClick(imgURL[8])}}/></div>
        </div>
        {modal && <Modal image={image}/>}
      </div>
    )
};

export default Grid;
