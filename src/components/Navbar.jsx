import React, { useState, useEffect } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, LoginOutlined, LogoutOutlined, StarOutlined } from '@ant-design/icons';

import icon from '../images/digital-wealth.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (screenSize <= 800) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <a class ='logo' href="/">Digital Wealth</a>
        <Button className="menu-control-container" onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu className='menu'>
          <a class ='a' href="/">{<HomeOutlined />} Home</a>
          <a class ='a' href="/cryptocurrencies">{<FundOutlined />} Cryptocurrencies</a>
          <a class ='a' href="/news">{<BulbOutlined />} News</a>
          <a class ='a' href="/news">{<StarOutlined />} WatchList</a>
          <a class ='a' href="/news">{<LoginOutlined />} Login</a>
          <a class ='a' href="/news">{<LogoutOutlined />} Logout</a>
      </Menu>
      )}
    </div>
  );
};

export default Navbar;