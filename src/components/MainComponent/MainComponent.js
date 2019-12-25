import React from 'react';
import styles from './MainComponent.module.css';

export const MainComponent = ({
  length,
  width,
  height,
  setWidth,
  setLength,
  setHeight,
  setOperation,
  handleSubmit,
  operation,
  result,
 }) =>{ 
  return (
    <div className={styles.container}>
      <div className={styles.form_container}>
      <form className={styles.form}>
        <div className={styles.title}>Свойства параллелепипеда</div>
        <div className={styles.form_row}>
          <input 
            type="text" 
            id="length"
            name="length" 
            required 
            value={length}
            onChange={setLength}
          />
          <label htmlFor="title">Длина, см</label>
        </div>
        <div className={styles.form_row}>
          <input 
            type="text" 
            id="width"
            name="width" 
            required 
            value={width}
            onChange={setWidth}
          />
          <label htmlFor="title">Ширина, см</label>
        </div>
        <div className={styles.form_row}>
          <input 
            type="text" 
            id="height"
            name="height" 
            required 
            value={height}
            onChange={setHeight}
          />
          <label htmlFor="title">Высота, см</label>
        </div>
        <div className={styles.form_row}>
          <select 
            id='operation'
            name='operation' 
            onChange={setOperation} 
            value={operation}
          >
            <option value='1'>Объем параллелепипеда</option>
            <option value='2'>Площадь поверхности параллелепипеда</option>
            <option value='3'>Диагональ</option>
            <option value='4'>Площадь лицевой грани</option>
            <option value='5'>Площадь боковой грани</option>
          </select>
          <label htmlFor="operation">Что ищем?</label>
        </div>
        <button className={styles.button} onClick={handleSubmit}>
          Вычислить
        </button>
      </form>
      </div>
      <div className={styles.result}>
        Результат операции:
        {!!Object.keys(result).length && (
          <span className={styles.result_text}>{`${result.type} = ${result.value} ${result.unit}`}</span>
        )}
      </div>
    </div>
  );
}