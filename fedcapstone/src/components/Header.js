import React from 'react';
import logo from '../images/Logo.svg'; // Adjust the path based on your project structure

const Header = () => {
  return (
    <header style={{ flex: 3, display: 'flex', justifyContent: 'normal', alignItems: 'center' }}>
      <img src={logo} alt='Logo' style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </header>
  );
};

export default Header;
