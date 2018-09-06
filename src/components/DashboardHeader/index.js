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

          <a ><h4 style={{ fontWeight: 300 }}>Products</h4></a>
          <a ><h4 style={{ fontWeight: 300 }}>Orders</h4></a>
          <a ><h4 style={{ fontWeight: 300 }}>Messages</h4></a>
          <a ><h4 style={{ fontWeight: 300 }}>Analytics</h4></a>
          <a ><h4 style={{ fontWeight: 300 }}>Store</h4></a>
          <a ><h4 style={{ fontWeight: 300 }}>Billing</h4></a>

        </div>

        <Grid>
          <Row>
            <Col xs={10} md={8} >
              <div style={{ display: "flex", flexDirection: "row", margin: 20, alignContent: "center", alignItems: "center", height: 60 }}>
                <img className="App-logo" src="../../../assets/box.svg" alt="logo" />
                <h1> dropsku</h1>
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

      </div>
    );
  }
}

export default Header;
