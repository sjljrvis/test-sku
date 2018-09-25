import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid, Tabs, Tab } from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

import './style/index.css';

class MessagesContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      marginleft: 0,
      width: 300
    }
  }

  setStyle = () => {
    this.setState({ width: 300, marginleft: 0 })
  }
  _setStyle = () => {
    this.setState({ width: 75, marginleft: 0 })
  }

  render() {
    let { marginleft, width } = this.state;

    return (
      <div>
        <DashboardHeader />
        <Grid>
          <Row>
            <Col md={2} xsHidden={true} smHidden={true}>
              <DashboardSidebar activeClass="Messages" {...this.props} />
            </Col>
            <Col md={10} xs={12}>

              <Row style={{ padding: "5px 10px" }}>
                <div>
                  <h2 style={{ margin: 5 }}>Messages</h2>
                </div>

                <div style={{ display: "flex", flexDirection: "row", borderStyle: "solid", borderWidth: 1, border: "none" }}>
                  <div style={{ height: 400, width: width, marginLeft: marginleft, padding: 10, overflowY: "scroll" }}>

                    {/* <button onClick={this.setStyle}>show</button>
                    <button onClick={this._setStyle}>close</button> */}
                    <div style={{ height: 50 }}>
                      <label>
                        <ion-icon name="ios-search" style={{ fontWeight: 300, fontSize: 15, color: "#2a7cf7" }}></ion-icon>
                        <input placeholder="Search" style={{ fontWeight: "lighter", border: "none", outline: "none" }} />
                      </label>
                      <hr style={{ width: "100%", margin: "1px 1px" }} />
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>

                    <div style={{ height: 50, borderRadius: ".25rem", width: "100%", backgroundColor: "#efefef", margin: "10px 0px" }}>
                    </div>
                  </div>

                  <div style={{ height: 400, width: "100%", padding: 10, }}>

                    <div style={{}}>
                      <label>
                        sejal@gmail.com
                      </label>
                      <hr style={{ width: "100%", margin: "1px 1px" }} />
                    </div>


                    <div style={{ height: 300, overflowY: "scroll", padding: 10 }}>

                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#efefef", marginRight: "auto", padding: 10, color: "#999999", fontWeight: 500 }}>
                        Hi sejal
                      </div>

                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#2a7cf7", marginLeft: "auto", padding: 10, color: "#fff", fontWeight: 500 }}>
                        hey mike
                      </div>



                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#efefef", marginRight: "auto", padding: 10, color: "#999999", fontWeight: 500 }}>
                        Hi sejal
                      </div>

                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#2a7cf7", marginLeft: "auto", padding: 10, color: "#fff", fontWeight: 500 }}>
                        hey mike
                      </div>


                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#efefef", marginRight: "auto", padding: 10, color: "#999999", fontWeight: 500 }}>
                        Hi sejal
                      </div>

                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#2a7cf7", marginLeft: "auto", padding: 10, color: "#fff", fontWeight: 500 }}>
                        hey mike
                      </div>


                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#efefef", marginRight: "auto", padding: 10, color: "#999999", fontWeight: 500 }}>
                        Hi sejal
                      </div>

                      <div style={{ borderRadius: ".25rem", minWidth: "15%", maxWidth: "15%", backgroundColor: "#2a7cf7", marginLeft: "auto", padding: 10, color: "#fff", fontWeight: 500 }}>
                        hey mike
                      </div>

                    </div>

                    <div style={{ height: 75, padding: 10 }}>
                      <div className="chat-input-box" style={{ height: "100%", width: "100%", padding: 2 }}>
                        <div className="chat-input-box-emoji">
                          <img src="../../../assets/smiling.svg" alt="store" style={{ width: 30, height: 30 }} />
                        </div>
                        <div style={{ width: "80%", backgroundColor: "red" }}>
                          <input placeholder="Type your message....." style={{ fontWeight: "lighter", border: "none", outline: "none", height: "100%", width: "100%" }} />
                        </div>
                        <div className="chat-input-box-emoji">
                          <img src="../../../assets/send-mail.svg" alt="store" style={{ width: 30, height: 30 }} />
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                {/* <Col md={2} xs={2}>
                  <div style={{ height: 300, backgroundColor: "red" }}>
                  </div>
                </Col>
                <Col md={10} xs={10}>
                  <div style={{ height: 300, backgroundColor: "green" }}>
                  </div>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default MessagesContainer;
