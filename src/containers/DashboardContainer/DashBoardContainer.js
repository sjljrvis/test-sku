import React, { Component } from 'react';
import { Glyphicon ,Grid,Row,Col} from 'react-bootstrap';

import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

import './style/index.css';

class DashBoardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {

    return (
      <div>
      <DashboardHeader />
      <Grid>
        <Row>
          <Col md={2} xsHidden={true}>
						<DashboardSidebar {...this.props}/>
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

export default DashBoardContainer;
