import React from 'react';
import styles from '../styles/Grid.css';
import ReactSVG from 'react-svg'

const Modal = ({handleKeyPress, onClickBack, onClickForward, imgURL, index, handleImageClick}) => {
  const left = '<';
  const right = '>';

  const link = '';

  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={() => handleImageClick(event)}><ReactSVG src="close.svg" /></span>
      <div className={styles.outsideContainer}>
        {/* <span className={styles.left} onClick={() => onClickBack()}>{left}</span> */}
        <span className={styles.left} onClick={() => onClickBack()}><ReactSVG src="left.svg" /></span>
        <img className={styles.modalContent} src={imgURL[index]}  height='124.45' width='124.45' onKeyDown = {()=>handleKeyPress(e)}/>
        <span className={styles.right} onClick={() => onClickForward()}><ReactSVG src="right.svg" /></span>
        <span className={styles.flag}><ReactSVG src="report.svg" /></span>
      </div>
      {/* <div className="photos-diner-image__1_agmEw_">
        <svg height="100" width="50">
          <circle cx="25" cy="25" fill="#56D7D9" r="25">
          </circle>
          <text dy=".3em" fill="white" fontFamily="Arial" fontSize="15px" textAnchor="middle" x="50%" y="50%">OT</text>
          </svg>
      </div> */}
    </div>
  )
};

export default Modal;
