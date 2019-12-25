import React from 'react';
import styles from './CubeComponent.module.css';

function mouseMove(event) {
  
}

export const CubeComponent = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.cube}>
        <div className={`${styles.side} ${styles.back}`}>1</div>
        <div className={`${styles.side} ${styles.top}`}>2</div>
        <div className={`${styles.side} ${styles.bottom}`}>3</div>
        <div className={`${styles.side} ${styles.left}`}>4</div>
        <div className={`${styles.side} ${styles.right}`}>5</div>
        <div className={`${styles.side} ${styles.front}`}>6</div>
      </div>
    </div>
  );
};