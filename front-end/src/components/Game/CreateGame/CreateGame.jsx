import React from 'react';
import styles from './CreateGame.module.scss';

function CreateGame() {
  return (
    <div className={styles['create']}>
      <div className={styles['create-container']}>
        <label className={styles['create-title']}>
          Upload photos
        </label>
        <div className={styles['create-inputs']}>
          {/* <input type='image'
            src='' /> */}
          <input type='textbox'
            className={styles['create-upload']}
            placeholder='Description' />
          <input type='textbox'
            className={styles['create-upload']}
            placeholder='Description' />
          <input type='textbox'
            className={styles['create-upload']}
            placeholder='Description' />
        </div>
        <button className={styles['create-btn']}>
          Publish
        </button>
      </div>
    </div>
  )
}

export default CreateGame;