import React, { Component } from 'react';
import './style/index.css';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';


class Header extends Component {


  openNav() {
    document.getElementById("appSidenav").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("appSidenav").style.width = "0";
  }



  render() {
    return (
      <div>


        <div id="appSidenav" className="left-sidenav">
          <a onClick={() => { this.closeNav() }} >close &times;</a>
          <a ><h4>Pricing</h4></a>
          <a ><h4>Features</h4></a>
          <a ><h4>Login</h4></a>
        </div>


        <div className="Header">
          <button className="Hamburger-icon" onClick={() => { this.openNav() }}>
            <img src="../../../assets/menu-icon.svg" alt="menu" style={{width:30,height:30}}/>
          </button>
          <div className="Header-Container">
            <input placeholder="Search" className="Input-search-box" />
            <Glyphicon glyph="search" />
          </div>
        </div>

      </div>
    );
  }
}

export default Header;
