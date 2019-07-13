import React from 'react';
import styles from '../styles/Grid.css';
import Modal from './Modal.jsx';

const Grid = ({handleKeyPress, onClickForward, onClickBack, index, modal, photos, handleImageClick}) => {

  const imgURL = [];
  {photos.map(photo => imgURL.push(photo))};

  return (
    <div><h1>{photos.length} Photos</h1>
    <div className={styles.wrapper}>
      <div className={[styles.column1]}>
        <div className={[styles.box1]}><img src={imgURL[0]} height='138' width='138' onClick={() => {handleImageClick(0)}}/></div>
        <div className={styles.box2}><img src={imgURL[1]}  height='138' width='138' onClick={() => {handleImageClick(1)}}/></div>
      </div>
      <div className={styles.column2}>
        <div className={styles.box3}><img src={imgURL[2]}  height='279' width='279' onClick={() => {handleImageClick(2)}}/></div>
      </div>
      <div className={styles.column3}>
        <div className={styles.box4}><img src={imgURL[3]}  height='91' width='91' onClick={() => {handleImageClick(3)}}/></div>
        <div className={styles.box5}><img src={imgURL[4]}  height='91' width='91' onClick={() => {handleImageClick(4)}}/></div>
        <div className={styles.box6}><img src={imgURL[5]}  height='91' width='91' onClick={() => {handleImageClick(5)}}/></div>
      </div>
      <div className={styles.column4}>
        <div className={styles.box7}><img src={imgURL[6]}  height='91' width='91' onClick={() => {handleImageClick(6)}}/></div>
        <div className={styles.box8}><img src={imgURL[7]}  height='91' width='91' onClick={() => {handleImageClick(7)}}/></div>
        <div className={[styles.box9]} onClick={() => {handleImageClick(8)}}>
          <span className={styles.textBlock}>+{photos.length-9} more</span>
          <img src={imgURL[8]}  height='91' width='91'/>
        </div>
      </div>
      {modal && <Modal handleKeyPress={handleKeyPress} onClickForward={onClickForward} onClickBack={onClickBack} index={index} handleImageClick={handleImageClick} imgURL={imgURL} />}
    </div>
    </div>
  );
};

export default Grid;
