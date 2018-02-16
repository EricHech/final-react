import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

// Clicking on one of the characters
// shows a new page with the
// character details.

class CharacterDetails extends Component {
  state = {
    character: null,
  };

  unpackLink = characterName => {
    return characterName.split('_').join(' ');
  };

  getChar = () => {
    let character;
    this.props.starwarsChars.map(SWChar => {
      if (SWChar.name === this.unpackLink(this.props.match.params.id)) {
        character = SWChar;
      }
    });
    return character;
  };

  componentWillMount() {
    this.setState({ character: this.getChar() });
  }
  render() {
    return (
      <div className="App">
        {this.state.character && (
          <div className="CharacterCards">
            <div className="CharacterName">{this.state.character.name}</div>
            <div className="CharacterDetails">
              Born on the year: {this.state.character.birth_year}
            </div>
            <div className="CharacterDetails">
              {this.state.character.eye_color},&nbsp;
              {this.state.character.gender},&nbsp;
              {this.state.character.hair_color},&nbsp;
              {this.state.character.height},&nbsp;
              {this.state.character.mass},&nbsp;
              {this.state.character.skin_color}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default CharacterDetails;
