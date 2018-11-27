import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Nav from  './Nav'

class App extends React.PureComponent {
  render() {
    return (
      <div className="App">
        <Header />
        <Nav />
      </div>
    );
  }
}

export default App;
