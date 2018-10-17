import React from 'react';
import styles from './StartGame.module.scss';
import { Link } from 'react-router-dom';

import Header from '../../Header/Header';

function StartGame(props) {
  return (
    <div className={styles['start-game']}>
      <Header />
      <div className={styles['start-title']}>
        {props.title}
      </div>
          {props.startGame && (
          <div className={styles['btn-container']}>
            <Link to="/start-game">
              <button className={styles['game-button']}>
                {props.left}
              </button>
            </Link>
            <Link to="/create-game">
              <button className={styles['game-button']}>
                {props.right}
              </button>
            </Link>
            </div>
        )}
        {!props.startGame && (
            <div className={styles['btn-container']}>
              <button className={styles['game-button']}>
                {props.left}
              </button>
              <button className={styles['game-button']}>
                {props.right}
              </button>
            </div>
        )} 
      </div>

  )
}

export default StartGame;