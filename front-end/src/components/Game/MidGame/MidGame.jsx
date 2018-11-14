import React from 'react';
import styles from './MidGame.module.scss';

function MidGame(props) {
  return (
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
                  src='https://image.flaticon.com/icons/png/512/23/23228.png' />
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
            <button className={styles['midgame-btn-yes']}>Yes</button>
            <button className={styles['midgame-btn-no']}>No</button>
          </div>) : (
            props.first ? (
              <div className={styles['btn-container']}>
                <button className={styles['midgame-btn-full']}>Next</button>
              </div>
            ) : (
                <div className={styles['btn-container']}>
                  <button className={styles['midgame-btn']}>Previous</button>
                  <button className={styles['midgame-btn']}>Next</button>
                </div>))}
      </div>
    </div>
  )
}

export default MidGame;