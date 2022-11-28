import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';

import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';

const App = () => (
  <div className="app">
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
            <Route exact path="/exchanges">
              <Exchanges />
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
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright ©  
          <Link style={{ color: 'white', textAlign: 'center' }} to="/">
             2022 Digital Wealth Inc. 
          </Link>
        </Typography.Title>
        <Space>
          <Link style={{ color: 'white', textAlign: 'center' }} to="/">Home</Link>
          {/* <Link style={{ color: 'white', textAlign: 'center' }} to="/exchanges">Exchanges</Link> */}
          <Link style={{ color: 'white', textAlign: 'center' }} to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;