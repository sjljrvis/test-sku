import React, { Component } from 'react';
import { Glyphicon, Row, Col, Grid, Tabs, Tab } from 'react-bootstrap';
import Trumbowyg from 'react-trumbowyg'

import DashboardHeader from '../../components/DashboardHeader'
import DashboardSidebar from '../../components/DashboardSidebar'

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
    return (
      <div>
        <DashboardHeader />
        <Grid>
          <Row>
            <Col md={2} xsHidden={true}>
              <DashboardSidebar />
            </Col>
            <Col md={10} xs={12}>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default ProductContainer;
