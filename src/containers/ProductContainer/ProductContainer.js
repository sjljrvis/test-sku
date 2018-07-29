import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid } from 'react-bootstrap';

import SideBar from '../../components/SideBar'
import './style/index.css';

class ProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <SideBar />

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>

          <div className="Header">
            <div className="Header-Container">
              <input placeholder="Search" className="Input-search-box" />
              <Glyphicon glyph="search" />
            </div>
          </div>

          <div style={{ padding: 0, width: "100%", paddingLeft: 75, minHeight: "100vh", marginTop: 75 }}>
            <div style={{ width: "100%", height: 500, border: "none" }}>
              <Grid>
                <Row>
                  <Col xs={12} md={2}>
                    <img
                      style={{ width: 200, height: 200 }}
                      src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg"
                      alt='product' />
                  </Col>
                  <Col xs={12} md={10}>
                    <h4>Title :</h4>
                    <h4 style={{fontWeight:300}}>Tactical Military Molle System Water Bags Water Bottle Outdoor Bag Kettle Pouch Holder For Camping Camelback Bicycle J2</h4>
                    <h4>Description</h4>
  
                  </Col>
                </Row>
              </Grid>

            </div>


          </div>

        </div>


      </div>
    );
  }
}

export default ProductContainer;
