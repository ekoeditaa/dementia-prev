import React from 'react';
import styles from './Guide.module.scss';
import Header from '../../Header/Header';
import { Link } from 'react-router-dom';

function Guide(props) {
  return (
    <div>
      <Header />
      <div className={styles['guide']}>
        <div>
          <div className={styles['guide-container']}>
            <div className={styles['guide-text']}>
              {props.desc}
            </div>
          </div>
          {props.default &&
            <Link to='/remember'>
              <button className={styles['guide-btn']}>Start</button>
            </Link>}
          {props.game &&
            <Link to='/midgame'>
              <button className={styles['guide-btn']}>Start game</button>
            </Link>}
          {props.end &&
            <Link to='/leaderboard'>
              <button className={styles['guide-btn']}>Next</button>
            </Link>}
        </div>
      </div>
    </div>
        )
      }
      
      export default Guide;
