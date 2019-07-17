import React from 'react';
import ReactSVG from 'react-svg';
import styles from '../styles/Grid.css';

const Modal = ({
  flag, handleFlag, handleKeyPress, onClickBack, onClickForward, imgURL, index, handleImageClick,
}) => {
  const left = '<';
  const right = '>';

  const link = '';

  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={() => handleImageClick(event)}><ReactSVG src="close.svg" /></span>
      <div className={styles.outsideContainer}>
        <span className={styles.left} onClick={() => onClickBack()}><ReactSVG src="left.svg" /></span>
        <img className={styles.modalContent} src={imgURL[index]} height="124.45" width="124.45" onKeyDown={() => handleKeyPress(e)} />
        {
             flag && (
             <span className={styles.flagbox}>
               {' '}
               <img src="https://reservly-photos.s3-us-west-1.amazonaws.com/alertbox.png" onClick={() => handleFlag()} />
               {' '}
             </span>
             )
        }
        <span className={styles.right} onClick={() => onClickForward()}><ReactSVG src="right.svg" /></span>
        <span className={styles.flag} onClick={() => handleFlag()}><ReactSVG src="report.svg" /></span>
      </div>
    </div>
  );
};

export default Modal;
