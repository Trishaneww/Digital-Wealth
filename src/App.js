import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { useState, useEffect } from 'react';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => {
  const [lightMode, setLightMode] = useState(false);

  return (
  <div id={lightMode ? "light-mode" : "dark-mode"}>
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <div>
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/cryptocurrencies">
              <Cryptocurrencies />
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
          </Switch>
        </div>
      </div>
      <div className="footer">
        <Typography.Title level={5} class="footer-header">  
          <Link class="footer-info" to="/">
          Copyright ©2022 Digital Wealth Inc. 
          </Link>
        </Typography.Title>
        <Space>
          <Link class="footer-info" to="/">Home</Link>
          {/* <Link style={{ color: 'white', textAlign: 'center' }} to="/exchanges">Exchanges</Link> */}
          <Link  class="footer-info"  to="/news">News</Link>
        </Space>
        <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setLightMode(!lightMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
      </div>
    </div>
  </div>
);
}

export default App;
