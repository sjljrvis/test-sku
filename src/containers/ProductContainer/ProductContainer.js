import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid, Tabs, Tab } from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

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
    return (
      <div>
        <DashboardHeader />
        <Grid>
          <Row>
            <Col md={2} xsHidden={true} smHidden={true}>
              <DashboardSidebar activeClass="Products" />
            </Col>
            <Col md={10} xs={12}>

              <Row style={{ padding: 10 }}>
                <div>
                  <h2>Products</h2>
                  <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    <h4 className="Product-Page-sub-header-active">My Products</h4>
                    <h4 className="Product-Page-sub-header">Imported Products</h4>
                  </div>
                </div>


                <div className="Product-list">
                  {new Array(10).fill(1, 0, 20).map((item, index) => {
                    return (
                      <div key={index} className="Product-list-cards">
                        <div className="Product-list-cards-img">
                          <img
                            alt="img"
                            src="http://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-product.jpg?1527147786" />
                        </div>

                        <div style={{ marginLeft: 50 }}>
                          <h5>{new String("Men Flats Shoes Mesh Breathable Shoes Casual Running Shoes Sneaker").slice(0)}</h5>
                          <h4 style={{ color: "#2a7cf7" }}> US 50 $</h4>
                          <h5 style={{ color: "#D0D0D0" }}>{new String("Shipment Provider").slice(0)}</h5>
                          <h5>By ali-express</h5>
                          <button>View</button>
                        </div>

                      </div>
                    )
                  })}

                </div>

              </Row>


            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductContainer;
