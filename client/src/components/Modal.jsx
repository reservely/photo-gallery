import React from 'react';
import styles from '../styles/Grid.css';

const Modal = ({image}) => (
  <div className={styles.modal}>
    <span className={styles.close}>X</span>
    <img className={styles.modalContent} src={image}  height='124.45' width='124.45' />
  </div>
);

export default Modal;
