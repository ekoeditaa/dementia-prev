import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.module.scss';
import Home from './components/Game/Home';
import StartGame from './components/Game/StartGame/StartGame';
import Guide from './components/Game/Guide/Guide';
import { Switch, Route, Redirect } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/start-game' render={() => {return(<Guide desc='Show this to your elderly friend' button='Start' />)}} />
        <Route path='/create-game' render={() => {return(<StartGame title='Customize Game' left='Load existing game' right='Create new game' startGame={false}/>)}} />
        <Route render={() => <Redirect to='/home' />} />
      </Switch>
    );
  }
}

export default App;
