import React from 'react';

import styles from './Guide.module.scss';

function Guide(props) {
  return (
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
  )
}

export default Guide;
