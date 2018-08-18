

import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';


class Footer extends Component {

  render() {
    return (
      <footer style={{ backgroundColor: "#FFFFFF" }}>
        <Grid>
          <Row>
            <Col xs={12} md={8}>
              <div style={{ display: "flex", flexDirection: "column", margin: 20, justifyContent: "flex-start" }}>
                <h3> @Info</h3>
                <h5>How to sell ?</h5>
                <h5>Pricing</h5>
                <h5>Dropshipping</h5>
                <h5>Terms of use</h5>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <div style={{ display: "flex", flexDirection: "row", margin: 20, alignContent: "center", alignItems: "center", height: 300, justifyContent: "center" }}>
                <img className="App-logo" src="../../../assets/box.svg" alt="logo" />
                <h1 style={{ color: "#2a7cf7" }}> dropsku</h1>
              </div>
            </Col>
          </Row>

          <Row>
            <hr style={{ borderColor: "#d8d7d7", width: "90%", borderWidth: 3 }} />
            <Col xs={12} md={12}>
              <p style={{ fontSize: "1.2em", fontWeight: "bolder", textAlign: "start" }}> &copy;dropsku.com 2018</p>
            </Col>
          </Row>

        </Grid>
      </footer>
    );
  }
}

export default Footer;



