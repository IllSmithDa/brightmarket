import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import Itempage from './Components/Itempage/Itempage';
import Resultpage from './Components/Resultpage/Resultpage';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/item/:itemID" component={Itempage} />
        <Route exact path="/result/:term" component={Resultpage} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;
