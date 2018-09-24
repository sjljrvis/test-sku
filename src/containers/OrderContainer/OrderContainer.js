import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid, Tabs, Tab } from 'react-bootstrap';
import Trumbowyg from 'react-trumbowyg'

import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

import '../../../node_modules/react-trumbowyg/dist/trumbowyg.min.css'
import './style/index.css';

class OrderContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
      image: null,
      title: "Tactical Military Molle System Water Bags Water Bottle Outdoor Bag",
      price: 0
    }
  }



  render() {

    return (
      <div>
        <DashboardHeader />
        <Grid>
          <Row>
            <Col md={2} xsHidden={true} smHidden={true}>
              <DashboardSidebar activeClass="Orders" {...this.props} />
            </Col>
            <Col md={10} xs={12}>

              <Row style={{ padding: 10 }}>
                <div>
                  <h2>Orders</h2>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <h4 className="Product-Page-sub-header-active">My Orders</h4>
                    <h4 className="Product-Page-sub-header">Orders fullfilled</h4>
                  </div>
                </div>


                {/* <div className="Order-list">
                  {new Array(10).fill(1, 0, 20).map((item, index) => {
                    return (
                      <div key={index} className="Order-list-cards">
                        <div className="Order-list-cards-img">
                          <img
                            alt="img"
                            src="http://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-product.jpg?1527147786" />
                        </div>

                        <div style={{ marginLeft: 50 ,display:"inline-flex"}}>
                          <h5>{new String("Men Flats Shoes Mesh Breathable Shoes Casual Running Shoes Sneaker").slice(0,25)+"..."}</h5>
                          <h5 style={{ color: "#2a7cf7" }}> US 50 $</h5>
                          <button>View</button>
                        </div>

                      </div>
                    )
                  })}

                </div> */}
                <div className="Order-list">
                  <table style={{ width: "100%" }}>
                    <tbody>
                      <tr>
                        <th>Image</th>
                        <th>Price</th>
                        <th>Date</th>
                        <th>Actions</th>
                      </tr>
                      {
                        new Array(10).fill(1, 0, 10).map((item, index) => {
                          return (
                            <tr>
                              <td>
                                <div className="Order-list-img">
                                  <img
                                    alt="img"
                                    src="http://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-product.jpg?1527147786" />
                                </div>
                              </td>
                              <td> 50$ </td>
                              <td>{new Date().toDateString()}</td>
                              <td> <button>View</button></td>
                            </tr>
                          )
                        })

                      }
                    </tbody>
                  </table>
                </div>
              </Row>


            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default OrderContainer;
