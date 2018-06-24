import React, { Component } from 'react';
import './App.css';
import CharList from './CharList/CharList';
import Char from './Char/Char';
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App" >
      <h1 className="titleStar"> Star Wars </h1>
      <hr></hr>
      <section class="intro">
  A long time ago, in a galaxy far, far away....
</section>
      <div className="starwars-demo" >
        <h2 className="byline" id="byline">Characters</h2>
      </div>
        <Router>
          <div className="char">
            <Route exact path="/" component={CharList} />
            <Route path="/character/:id" component={Char} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
