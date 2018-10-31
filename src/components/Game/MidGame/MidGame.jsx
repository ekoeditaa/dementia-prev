import React from 'react';
import styles from './MidGame.module.scss';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

function MidGame(props) {
  return (
    <div className={styles['midgame-div']}>
      <Header />
      <div className={styles['midgame']}>
        <div className={styles['midgame-content']}>
          <div className={styles['midgame-title']}>
            {props.realGame ? 'Is this...' : 'Remember!'}
          </div>
          <div className={styles['midgame-container']}>
            <div className={styles['midgame-prof']}>
              <div className={styles['midgame-card']}>
                <div className={styles['image-container']}>
                  <img
                    className={styles['image']}
                    src='https://imagesvc.timeincapp.com/v3/mm/image?url=https%3A%2F%2Fimages.hellogiggles.com%2Fuploads%2F2017%2F12%2F11001352%2Fbeyonce-green-dress-e1513009030322.jpg&w=700&c=sc&poi=face&q=85' />
                </div>
                <div className={styles['midgame-text']}>
                  {props.name}
                  {props.realGame ? '?' : ''}
                </div>
              </div>
            </div>
            {props.realGame && (
              <div className={styles['progress-bar-container']}>
                <div className={styles['progress-bar']}>
                  {props.progress}%
              </div>
              </div>)}
          </div>
          {props.realGame ? (
            <div className={styles['btn-container']}>
              <Link to='/endgame'>
                <button className={styles['midgame-btn-yes']}>Yes</button>
              </Link>
              <Link to='/endgame'>
                <button className={styles['midgame-btn-no']}>No</button>
              </Link>
            </div>) : (
              props.first ? (
                <div className={styles['btn-container']}>
                  <Link to='/mid-remember'>
                    <button className={styles['midgame-btn-full']}>Next</button>
                  </Link>
                </div>
              ) : (
                  <div className={styles['btn-container']}>
                    <Link to='/remember'>
                      <button className={styles['midgame-btn']}>Previous</button>
                    </Link>
                    <Link to='/game-guide'>
                      <button className={styles['midgame-btn']}>Next</button>
                    </Link>
                  </div>))}
        </div>
      </div>
    </div>
  )
}

export default MidGame;