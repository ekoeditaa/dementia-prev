import React from 'react';
import styles from './CreateGame.module.scss';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

function CreateGame() {
  return (
    <div className={styles['create-div']}>
      <Header />
      <div className={styles['create']}>
        <div className={styles['create-container']}>
          <label className={styles['create-title']}>
            Upload photos
          </label>
          <div className={styles['create-inputs']}>
            <input type='textbox'
              className={styles['create-upload-name']}
              placeholder='Game name' />
            <div className={styles['upload-container']}>
              {/* <button className={styles['upload-btn']}>Upload</button> */}
              <img
                className={styles['upload-image']}
                src='https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2017%2F12%2F11001352%2Fbeyonce-green-dress-e1513009030322.jpg&w=700&c=sc&poi=face&q=85' />
              <input type='textbox'
                className={styles['create-upload']}
                placeholder='Description' />
            </div>
            <div className={styles['upload-container']}>
              {/* <button className={styles['upload-btn']}>Upload</button> */}
              <img
                className={styles['upload-image']}
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Cristiano_Ronaldo_2018.jpg/220px-Cristiano_Ronaldo_2018.jpg' />
              <input type='textbox'
                className={styles['create-upload']}
                placeholder='Description' />
            </div>
            <div className={styles['upload-container']}>
              {/* <button className={styles['upload-btn']}>Upload</button> */}
              <img
                className={styles['upload-image']}
                src='https://upload.wikimedia.org/wikipedia/commons/8/8d/President_Barack_Obama.jpg' />
              <input type='textbox'
                className={styles['create-upload']}
                placeholder='Description' />
            </div>
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