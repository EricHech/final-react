import React, { Component } from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Link,
  NavLink,
} from 'react-router-dom';
import CharacterDetails from './CharacterDetails';

class Characters extends Component {
  render() {
    const prepareLink = characterName => {
      return characterName.split(' ').join('_');
    };

    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="Body">
          {this.props.starwarsChars.map((SWChar, i) => {
            return (
              <Link to={`/${prepareLink(SWChar.name)}`} key={i}>
                <div className="CharacterCards">
                  <div className="CharacterName">{SWChar.name}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Characters;
