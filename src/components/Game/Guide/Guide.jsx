import React from 'react';

import styles from './Guide.module.scss';
import style from '../Home/Home.module.scss';

import Header from '../../Header/Header';

function Guide(props) {
  return (
    <div className={style['home-container']}>
    <Header />
    <div className={styles['guide']}>
      <div>
        <div className={styles['guide-container']}>
          <div className={styles['guide-text']}>
            {props.desc}
        </div>
        </div>
        <button className={styles['guide-btn']}>
          {props.button}
      </button>
      </div>
    </div>
    </div>
  )
}

export default Guide;
