import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import StartGame from './components/Game/StartGame/StartGame';
import Guide from './components/Game/Guide/Guide';
import MidGame from './components/Game/MidGame/MidGame';
import EndGame from './components/Game/EndGame/EndGame';
import Choose from './components/Game/Choose/Choose';
import CreateGame from './components/Game/CreateGame/CreateGame';
import SaveGame from './components/Game/SaveGame/SaveGame';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' render={() => { return (<StartGame title='Choose game' home />) }} />
        <Route path='/custom' render={() => { return (<StartGame title='Customize game' />) }} />
        <Route path='/default-guide' render={() => { return (<Guide desc='Show this to your elderly friend' default />) }} />
        <Route path='/remember' render={() => { return (<MidGame name='Barack Obama' first />) }} />
        <Route path='/mid-remember' render={() => { return (<MidGame name='Barack Obama' />) }} />
        <Route path='/game-guide' render={() => { return (<Guide desc='Choose yes if match and no if not' game />) }} />
        <Route path='/midgame' render={() => { return (<MidGame realGame name='Barack Obama' progress='100' />) }} />
        <Route path='/endgame' render={() => { return (<Guide desc='Congratulations! You got 1 out of 1 correct!' end />) }} />
        <Route path='/leaderboard' component={EndGame} />
        <Route path='/choose-game' component={Choose} />
        <Route path='/create-game' component={CreateGame} />
        <Route render={() => <Redirect to='/home' />} />
      </Switch>
    );
  }
}

export default App;
