import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid, Tabs, Tab } from 'react-bootstrap';
import Trumbowyg from 'react-trumbowyg'

import DashboardHeader from '../../components/DashboardHeader'

import '../../../node_modules/react-trumbowyg/dist/trumbowyg.min.css'
import './style/index.css';

class ProductContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      title: "Tactical Military Molle System Water Bags Water Bottle Outdoor Bag",
      price: 0
    }
  }

  setTitle = (e) => {
    this.setState({ title: e.target.value })
  }
  setPrice = (e) => {
    this.setState({ price: e.target.value })
  }

  handleEditorChange = (e) => {
    console.log('Content was updated:', e.target.getContent());
  }

  render() {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <DashboardHeader />

          <div className="Product-info" style={{ padding: 0, width: "100%", paddingLeft: 20, minHeight: "100vh", marginTop: 75 }}>
            <div style={{ width: "100%", height: 500, border: "none" }}>
              <Grid>
                <Row size={5}>
                  <Col xs={12} md={4}>
                    <Row style={{textAlign:"center"}}>
                      <img
                        style={{ width: 200, height: 200 ,marginLeft:"auto",marginRight:"auto"}}
                        src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg"
                        alt='product' />
                    </Row>
                    <Row>
                      {/* <button className="Save-button"> Save</button> */}
                    </Row>
                  </Col>
                  <Col xs={12} md={8}>
                    <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                      <Tab eventKey={1} title="Info">
                        <h4 className="Info-h4">Title :</h4>
                        <textarea
                          className="Info-textArea"
                          onChange={(e) => { this.setTitle(e) }}
                          value={this.state.title}
                        >
                        </textarea>

                        <h4 className="Info-h4">Price :</h4>
                        <input className="Info-input"
                          placeholder=" $ 50"
                          type="number"
                          onChange={(e) => { this.setPrice(e) }} />
                      </Tab>
                      <Tab eventKey={2} title="Description">
                        <h4 className="Info-h4">Description</h4>
                        <Trumbowyg
                          id='react-trumbowyg'
                          buttons={
                            [
                              ['formatting'],
                              'btnGrp-semantic',
                              ['link'],
                              ['insertImage'],
                              'btnGrp-justify',
                              'btnGrp-lists',
                              ['fullscreen']
                            ]
                          }
                          data='Hello, World!'
                          placeholder='Type your text!'
                          onChange={(e) => console.log(e)}
                        />
                      </Tab>
                      <Tab eventKey={3} title="Images" >
                        <h4 className="Info-h4">Images</h4>

                        <div className="Card-image-container">
                          {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, key) => {
                              return (
                                <div key={key} className="Card-image-item">
                                  <img
                                    src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" alt='product' />
                                  <div style={{ height: 30, backgroundColor: "rgba(102,102,102,0.3)", padding: 2 }}>
                                    <input type="checkbox" />
                                  </div>
                                </div>
                              )
                            })
                          }
                        </div>
                      </Tab>
                    </Tabs>
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
