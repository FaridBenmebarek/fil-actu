import React, { Component } from 'react';
import FluxActualite from './FluxActualite';
import { actualites } from './actualites';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Fil d'Actualité</h1>
        <FluxActualite actualites={actualites} />
      </div>
    );
  }
}

export default App;
