import React from 'react';
import styles from './CreateGame.module.scss';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

function CreateGame() {
  return (
    <div>
      <Header />
      <div className={styles['create']}>
        <div className={styles['create-container']}>
          <label className={styles['create-title']}>
            Upload photos
          </label>
          <div className={styles['create-inputs']}>
            <input type='textbox'
              className={styles['create-upload']}
              placeholder='Game name' />
            <input type='textbox'
              className={styles['create-upload']}
              placeholder='Description' />
            <input type='textbox'
              className={styles['create-upload']}
              placeholder='Description' />
          </div>
          <Link to='/default-guide'>
            <button className={styles['create-btn']}>Save and publish</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CreateGame;