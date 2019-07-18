import React from 'react';
import { LoremIpsum } from 'lorem-ipsum';
import styles from '../styles/Grid.css';

const Overview = () => {

  const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    }
  });

  return (
    <div>
      <div className={styles.con}>
        <div className={styles.par}>{lorem.generateParagraphs(1)}</div>
      </div>
    </div>
      );
}

export default Overview;