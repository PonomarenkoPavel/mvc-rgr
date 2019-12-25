import React, { PureComponent } from 'react';
import styles from './CubeComponent.module.css';

let flag = false;

function mouseMove(event) {
  if (flag) {
    document.getElementById('cube').style.cssText = `transform: rotateX(${-event.pageY}deg) rotateY(${event.pageX}deg);`;
  }
}

function keyDown(event) {
  
  if (event.code == 'KeyQ') {
    flag = true;
  }
} 

function keyUp(event) {
  if (event.code == 'KeyQ') {
    flag = false;
  }
}

export class CubeComponent extends PureComponent {
  
  componentDidMount() {
    document.addEventListener('keydown', keyDown);
    document.addEventListener('keyup', keyUp);
    document.getElementById('container').addEventListener('mousemove', mouseMove);
  }

  componentWillUnmount() {
    document.getElementById('container').removeEventListener('mousemove', mouseMove);
  }

  render() {
    return (
      <div className={styles.container} id='container'>
        <div className={styles.wrapper}>
          <div className={styles.cube} id='cube'>
            <div className={`${styles.side} ${styles.back}`}>Задняя грань</div>
            <div className={`${styles.side} ${styles.top}`}>Верхняя грань</div>
            <div className={`${styles.side} ${styles.bottom}`}>Нижняя грань</div>
            <div className={`${styles.side} ${styles.left}`}>Левая грань</div>
            <div className={`${styles.side} ${styles.right}`}>Правая грань</div>
            <div className={`${styles.side} ${styles.front}`}>Лицевая грань</div>
          </div>
        </div>
      </div>
    );
  }
};