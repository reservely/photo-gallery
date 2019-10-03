import React from 'react';
import styles from '../styles/Grid.css';
import LeftSVG from '../icons/left.jsx';
import RightSVG from '../icons/right.jsx';
import ReportSVG from '../icons/report.jsx';
import CloseSVG from '../icons/close.jsx';

const Modal = ({
  flag, handleFlag, handleKeyPress, onClickBack, onClickForward, imgURL, index, handleImageClick,
}) => {

  return (
    <div className={styles.modal}>
      <span className={styles.close} onClick={() => handleImageClick(event)}><CloseSVG /></span>
      <div className={styles.outsideContainer}>
        <span className={styles.left} onClick={() => onClickBack()}><LeftSVG /></span>
        <img className={styles.modalContent} src={imgURL[index]} height="124.45" width="124.45" onKeyDown={() => handleKeyPress(e)} />
        {
             flag && (
             <span className={styles.flagbox}>
               {`<img src="https://reservly-photos.s3-us-west-1.amazonaws.com/alertbox.png" onClick = {${() => handleFlag()}} />`}
             </span>
             )
        }
        <span className={styles.right} onClick={() => onClickForward()}><RightSVG /></span>
        <span className={styles.flag} onClick={() => handleFlag()}><ReportSVG /></span>
      </div>
    </div>
  );
};

export default Modal;
