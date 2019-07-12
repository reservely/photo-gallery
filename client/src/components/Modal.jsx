import React from 'react';
import styles from '../styles/Grid.css';

const Modal = ({image, handleImageClick}) => {
  const left = '<';
  const right = '>';

  return (<div className={styles.modal}>
    <span className={styles.close} onClick={() => handleImageClick(event)}>X</span>
    <div className={styles.smallContainer}>
      <span className={styles.left}>{left}</span>
      <img className={styles.modalContent} src={image}  height='124.45' width='124.45' />
      <span className={styles.right}>{right}</span>
    </div>
  </div>)
};

export default Modal;
