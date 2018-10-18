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
      {props.home && (
        <div className={styles['btn-container']}>
          <Link to='default-guide'>
            <button className={styles['game-button']}>
              Default game
            </button>
          </Link>
          <Link to='/custom'>
            <button className={styles['game-button']}>
              Custom game
          </button>
          </Link>
        </div>
      )}
      {!props.home && (
        <div className={styles['btn-container']}>
          <Link to='/choose-game'>
            <button className={styles['game-button']}>Load existing game</button>
          </Link>
          <Link to='/create-game'>
            <button className={styles['game-button']}>Create new game</button>
          </Link>
        </div>
      )}
    </div>

  )
}

export default StartGame;