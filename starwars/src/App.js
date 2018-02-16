import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Characters from './components/Characters';
import CharacterDetails from './components/CharacterDetails';
import './App.css';

class App extends Component {
  state = {
    starwarsChars: [],
  };

  componentDidMount() {
    axios
      .get('https://swapi.co/api/people')
      .then(response => {
        this.setState({ starwarsChars: response.data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  }

  render() {
    return (
      <Router>
        <div>
          <Route
            exact
            path="/"
            component={() => (
              <Characters starwarsChars={this.state.starwarsChars} />
            )}
          />
          <Route
            path="/:id"
            component={(props) => (
              <CharacterDetails {...props} starwarsChars={this.state.starwarsChars} />
            )}
          />
        </div>
      </Router>
    );
  }
}

export default App;
