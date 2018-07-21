import React, { Component } from 'react';
import './style/index.css';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';


class Header extends Component {


  openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("mySidenav").style.width = "0";
  }

  openLogin = () => {
    this.props.history.push('/login');
  }

  render() {
    return (
      <header className="App-header">

        <div id="mySidenav" className="sidenav">
          <a onClick={() => { this.closeNav() }} >close &times;</a>
          <a ><h4>Pricing</h4></a>
          <a ><h4>Features</h4></a>
          <a onClick={this.openLogin}><h4>Login</h4></a>
        </div>


        <Grid>
          <Row>
            <Col xs={10} md={8} >
              <div style={{ display: "flex", flexDirection: "row", margin: 20, alignContent: "center", alignItems: "center", height: 60 }}>
                <img className="App-logo" src="../../../assets/box.svg" alt="logo" />
                <h1> dropsku</h1>
              </div>
            </Col>

            <Col xs={0} md={4} className="Nav-list">
              <div style={{ display: "flex", flexDirection: "row", margin: 20, alignContent: "center", alignItems: "center", justifyContent: "space-around", height: 60 }}>
                <h4> Pricing</h4>
                <h4> Features</h4>
                <h4 onClick={this.openLogin}> Login</h4>
              </div>
            </Col>

            <Col xs={2} md={4} className="Nav-mobile">
              <div style={{ display: "flex", flexDirection: "row", margin: 20, alignContent: "center", alignItems: "center", justifyContent: "space-around", height: 60 }}>
                <button className="Hamburger-icon" onClick={() => { this.openNav() }}>
                  <Glyphicon glyph="menu-hamburger" />
                </button>
              </div>
            </Col>
          </Row>

        </Grid>
      </header>
    );
  }
}

export default Header;
