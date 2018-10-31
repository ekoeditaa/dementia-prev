import React from 'react';
import styles from './EndGame.module.scss';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

function EndGame() {
  return (
    <div className={styles['endgame-div']}>
      <Header />
      <div className={styles['endgame']}>
        <div>
          <div className={styles['endgame-title']}>
            Leaderboard
        </div>
          <div className={styles['endgame-container']}>
            <div className={styles['leaderboard-header']}>
              <div className={styles['leaderboard-rank']}>Rank</div>
              <div className={styles['leaderboard-name']}>Name</div>
              <div className={styles['leaderboard-score']}>Score</div>
            </div>
            <div className={styles['leaderboard-entry']}>
              <div className={styles['leaderboard-rank']}>1</div>
              <div className={styles['leaderboard-name']}>Michelle</div>
              <div className={styles['leaderboard-score']}>100</div>
            </div>
            <div className={styles['leaderboard-current']}>
              <div className={styles['leaderboard-rank']}>2</div>
              {/* <input type='textbox'
                className={styles['endgame-textbox']}
                placeholder='Insert your name' /> */}
              <div className={styles['leaderboard-name']}>Natassa</div>
              <div className={styles['leaderboard-score']}>90</div>
            </div>
            <div className={styles['leaderboard-entry']}>
              <div className={styles['leaderboard-rank']}>3</div>
              <div className={styles['leaderboard-name']}>Wan Qi</div>
              <div className={styles['leaderboard-score']}>80</div>
            </div>
            <div className={styles['leaderboard-entry']}>
              <div className={styles['leaderboard-rank']}>4</div>
              <div className={styles['leaderboard-name']}>Albert</div>
              <div className={styles['leaderboard-score']}>80</div>
            </div>
            <div className={styles['leaderboard-entry']}>
              <div className={styles['leaderboard-rank']}>5</div>
              <div className={styles['leaderboard-name']}>Wang Qian</div>
              <div className={styles['leaderboard-score']}>70</div>
            </div>
          </div>
          <div className={styles['btn-container']}>
            <Link to='/game-guide'>
              <button className={styles['endgame-btn']}>Replay</button>
            </Link>
            <Link to='/home'>
              <button className={styles['endgame-btn']}>Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EndGame;
