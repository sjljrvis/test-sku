import React, { Component } from 'react';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';

import './style/index.css';

class LoginContainer extends Component {

  render() {
    return (
      <div>
        <Grid>
          <Row>
            <Col>
              <div className="Auth-container">
                <div style={{ display: "flex", flexDirection: "row", margin: 20, alignContent: "center", alignItems: "center", height: 60 }}>
                  <img className="App-logo" src="../../../assets/box.svg" alt="logo" />
                  <h1> dropsku</h1>
                </div>

                <div className="Auth-card">
                  <div style={{ marginBottom: 20 }}>
                    <h4> Email</h4>
                    <input placeholder="Email">
                    </input>
                  </div>

                  <div style={{ marginBottom: 20 }}>
                    <h4> Password</h4>
                    <input placeholder="Password" type="password">
                    </input>
                  </div>
                  <div>
                    <button>Login</button>
                  </div>

                </div>
                <h5>Don't have an account? <a>Sign Up</a></h5>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default LoginContainer;
