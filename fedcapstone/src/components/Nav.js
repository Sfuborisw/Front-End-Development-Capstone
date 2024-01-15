import React from 'react';

const Nav = () => {
  return (
    <nav style={{flex: 7}}>
      <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', padding: 0 }}>
        <li><a href="/">HOME</a></li>
        <li><a href="/about">ABOUT</a></li>
        <li><a href="/menu">MENU</a></li>
        <li><a href="/res">RESERVATIONS</a></li>
        <li><a href="/order">ORDER ONLINE</a></li>
        <li><a href="/login">LOGIN</a></li>
      </ul>
    </nav>
  );
};

export default Nav;
