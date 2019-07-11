import React from 'react';
import styles from '../styles/Grid.css';
import LastColumnPics from './LastColumnPics.jsx';

const Grid = (props) => (
    <div className={styles.wrapper}>
        <div className={styles.column1}>
          <div className={styles.box1}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='124'/></div>
          <div className={styles.box2}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='124'/></div>
        </div>
        <div className={styles.column2}>
          <div className={styles.box3}><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg" height='250'/></div>
        </div>
        <LastColumnPics handleImageClick={props.handleImageClick}/>
    </div>
);

export default Grid;


// <div>
// <ul> 
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
//   <li>
//     <a>
//       <div><img src="https://www.petmd.com/sites/default/files/petmd-shaking-puppy.jpg"/></div>
//     </a>
//   </li>
// </ul>
// </div>