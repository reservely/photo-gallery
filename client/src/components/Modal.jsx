import React from 'react';
import styles from '../styles/Grid.css';

const Modal = ({onClickBack, onClickForward, imgURL, index, handleImageClick}) => {
  const left = '<';
  const right = '>';

  return (<div className={styles.modal}>
    <span className={styles.close} onClick={() => handleImageClick(event)}>X</span>
    <span className={styles.left} onClick={() => onClickBack()}>{left}</span>
    <img className={styles.modalContent} src={imgURL[index]}  height='124.45' width='124.45' />
    <span className={styles.right} onClick={() => onClickForward()}>{right}</span>
  </div>)
};

export default Modal;
