import React from 'react';

import styles from './EndGame.module.scss';

function EndGame() {
  return (
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
            <div className={styles['leaderboard-name']}>Natassa</div>
            <div className={styles['leaderboard-score']}>90</div>
          </div>
        </div>
        <div className={styles['btn-container']}>
          <button className={styles['endgame-btn']}>Replay</button>
          <button className={styles['endgame-btn']}>Exit</button>
        </div>
      </div>
    </div>
  )
}

export default EndGame;
