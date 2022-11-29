import React, { useState, useEffect } from 'react';
import { Button, Menu, Avatar } from 'antd';
import { HomeOutlined, BulbOutlined, FundOutlined, MenuOutlined, LoginOutlined, LogoutOutlined, StarOutlined } from '@ant-design/icons';

import icon from '../images/digital-wealth.png';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(undefined);
  const [darkMode, setDarkMode] = useState(false);

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
    <div className={darkMode ? 'dark-mode' : 'nav-container'}>
      <div className='logo-container'>
        <Avatar src={icon} size='large' />
        <a className ='logo' href='/'>Digital Wealth</a>
        <Button className ='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}><MenuOutlined /></Button>
      </div>
      {activeMenu && (
      <Menu className="menu">
          <a className="a" href="/"> <HomeOutlined /> Home</a>
          <a className="a" href="/cryptocurrencies"> <FundOutlined /> Cryptocurrencies</a>
          <a className="a" href="/news"> <BulbOutlined /> News</a>
          <a className="a" href="/news"> <StarOutlined /> WatchList</a>
          <a className="a" href="/news"> <LoginOutlined /> Login</a>
          <a className="a" href="/news"> <LogoutOutlined /> Logout</a>
          
      </Menu>
      )}
    </div>
  );
};

export default Navbar;
