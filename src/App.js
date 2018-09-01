import React, { Component } from 'react';

import Router from './routers/Router';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="page-container">
        <NavBar />
        <Router />
      </div>
    );
  }
}

export default App;
