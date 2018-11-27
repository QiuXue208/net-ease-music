import React, { Component } from 'react';
import logo from './logo.svg';
import Button from 'antd/lib/button';
import './App.css';
import { Icon } from 'antd';

const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_937535_g614nosflkn.js',
});

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Button type="primary">Button</Button>
        <div className="icons-list">
    <IconFont type="icon-wangyiyunyinle" />
    <IconFont type="icon-wangyiyunyinle" />
    <IconFont type="icon-wangyiyunyinle" />
  </div>,
      </div>
    );
  }
}

export default App;
