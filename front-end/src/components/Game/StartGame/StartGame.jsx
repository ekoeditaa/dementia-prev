import React from 'react';
import styles from './StartGame.module.scss';

function StartGame(props) {

  return (
    <div className={styles['start-game']}>
      <div className={styles['start-title']}>
        {props.title}
      </div>
      <div className={styles['btn-container']}>
        <button className={styles['game-button']}>
          {props.left}
        </button>
        <button className={styles['game-button']}>
          {props.right}
        </button>
      </div>
    </div>
  )
}

export default StartGame;