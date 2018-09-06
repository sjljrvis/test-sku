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
      products: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      checkedProducts: []
    }
  }



  render() {
    let { products, checkedProducts } = this.state;
    return (
      <div>
        <DashboardHeader />
        <Grid>
          <Row>
            <Col md={2} xsHidden={true}>
              <div className="app-sidebar" style={{ height: 500, width: 200 }}>
                <div className="app-sidebar-item">
                  <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="ios-archive" style={{ marginRight: 5 }}></ion-icon>Products</h4>
                </div>

                <div className="app-sidebar-item">
                  <h4 style={{ fontWeight: 300, fontSize: 16 }}> <ion-icon name="ios-cart" style={{ marginRight: 5 }}></ion-icon> Orders</h4>
                </div>

                <div className="app-sidebar-item">
                  <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="chatboxes" style={{ marginRight: 5 }}></ion-icon>Messages</h4>
                </div>

                <div className="app-sidebar-item">
                  <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="stats" style={{ marginRight: 5 }}></ion-icon>Analytics</h4>
                </div>

                <div className="app-sidebar-item">
                  <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="pricetag" style={{ marginRight: 5 }}></ion-icon>Store</h4>
                </div>

                <div className="app-sidebar-item">
                  <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="cash" style={{ marginRight: 5 }}></ion-icon>Billing</h4>
                </div>

              </div>
            </Col>
            <Col md={10} xs={12}>
              <div style={{ height: 500, width: "100%" }}>
                <div className="Card-list" style={{ marginTop: 20 }}>
                  <div className="Card">
                    <img src="../../../assets/online-store.svg" alt="store" style={{ width: 50, height: 50 }} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
                      <h4>You create a shopify store</h4>
                      <p>Create a shopify store and connect it here</p>
                    </div>
                  </div>

                  <div className="Card">
                    <img src="../../../assets/chrome.svg" alt="store" style={{ width: 50, height: 50 }} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
                      <h4>Install dropsku chrome app</h4>
                      <p>Install dropsku chrome extension here and lets go !!</p>
                    </div>
                  </div>

                  <div className="Card">
                    <img src="../../../assets/ali-exp.svg" alt="store" style={{ width: 50, height: 50 }} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
                      <h4>Find right products from ali-express</h4>
                      <p>Easily import products from ali-express to dropsku and manage you inventory</p>
                    </div>
                  </div>

                  <div className="Card">
                    <img src="../../../assets/sell.svg" alt="store" style={{ width: 50, height: 50 }} />
                    <div style={{ display: "flex", flexDirection: "column", marginLeft: 20 }}>
                      <h4>Make a sell</h4>
                      <p>Easily edit product details and make a sell</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductContainer;
