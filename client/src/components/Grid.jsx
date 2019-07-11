import React from 'react';
import styles from '../styles/Grid.css';
import LastColumnPics from './LastColumnPics.jsx';

const Grid = ({photos, handleImageClick}) => (
    <div className={styles.wrapper}>
        <div className={styles.column1}>
          <div className={styles.box1}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='124.45' width='124.45' onClick={(event) => {handleImageClick(event)}}/></div>
          <div className={styles.box2}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='124.45' width='124.45' onClick={(event) => {handleImageClick(event)}}/></div>
        </div>
        <div className={styles.column2}>
          <div className={styles.box3}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='250.92' width='250.92' onClick={(event) => {handleImageClick(event)}}/></div>
        </div>
        <LastColumnPics photos={photos} handleImageClick={handleImageClick} />
    </div>
);

export default Grid;


