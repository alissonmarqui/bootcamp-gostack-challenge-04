import React, { Component } from 'react';

import FacebookLogo from '../assets/facebook.svg';

class Header extends Component {
  render(){
    return (
      <div id="header">
        <img src={FacebookLogo} />
        <a href="#">Meu Perfil</a>
      </div>
    );
  }
}

export default Header;