import React from 'react';
import styles from './Home.module.scss';
import Header from '../../Header/Header';
import StartGame from '../StartGame/StartGame';
import CreateGame from '../CreateGame/CreateGame';
import Guide from '../Guide/Guide';
import Choose from '../Choose/Choose';
import MidGame from '../MidGame/MidGame';
import EndGame from '../EndGame/EndGame';

function Home() {
  return (
    <div className={styles['home-container']}>
      <Header />
      <StartGame title='Choose game' left='Default game' right='Custom game' />
      <CreateGame />
      <Guide desc='Show this to your elderly friend' button='Start' />
      <Choose />
      <MidGame name='Mr. John' progress='60' realGame={true} />
      <MidGame name='Ms. Smith' realGame={false} />
      <MidGame name='Ms. Smith' realGame={false} first={true}/>
      <EndGame />
    </div>
  )
}

export default Home;