import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './CharList.css';
import { render, unmountComponentAtNode } from 'react-dom';
import { Simulate } from 'react-addons-test-utils';



class CharList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      loading: true
    };
  }

  componentDidMount() {
    fetch('https://swapi.co/api/people')
    .then(response => response.json())
    .then(data => {
      this.setState((prevState, props) => {
        return {
          characters: data.results,
          loading: false
        };
      });
    })
  }

  retrievePartial(url) {
    var fragment = url.split("/");
    return (url.lastIndexOf('/') !== url.length - 1 ?
    fragment[fragment.length - 1] :
    fragment[fragment.length - 2]);
  }

  render() {
    return (
      <div>

        {this.state.characters.map((character, index) =>
          <h1 key={index}>
            <Link to={`/character/${this.retrievePartial(character.url)}`}>{character.name}</Link>
          </h1>
        )}
      </div>
    );
  }
}

export default CharList;
