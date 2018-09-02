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

  setCheckedItem = (index) => {
    let { checkedProducts } = this.state;
    if (checkedProducts.indexOf(index) == -1) {
      checkedProducts.push(index);
      this.setState({ checkedProducts })
    }
    else {
      checkedProducts.splice(index, 1)
      this.setState({ checkedProducts })
    }
  }
  setCheckedItems = () => {
    let { products, checkedProducts } = this.state;
    if (checkedProducts.length !== products.length) {
      checkedProducts = products.map((item, index) => { return index })
      this.setState({ checkedProducts })
    }
    else {
      this.setState({ checkedProducts: [] })
    }
  }

  render() {
    let { products, checkedProducts } = this.state;
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <DashboardHeader />

          <div className="Product-list">

            <div className="Product-list-Container">
              <table style={{ width: "80%" }}>
                <tbody>
                  <tr className="Product-table-header">
                    <th style={{}}>
                      <label className="checkbox-container">
                        Select
                      <input type="checkbox" onChange={(e) => this.setCheckedItems()} />
                        <span className="checkmark"></span>
                      </label>
                    </th>
                    <th>Product</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th style={{ textAlign: "center" }}>Actions</th>
                  </tr>

                  {
                    products.map((item, index) => {
                      return (
                        <tr className="Product-list-item" key={index} >
                          <td>
                            <label className="checkbox-container">
                              &nbsp;
                             <input type="checkbox"
                                checked={checkedProducts.indexOf(index) !== -1 ? true : false}
                                onChange={(e) => this.setCheckedItem(index)} />
                              <span className="checkmark"></span>
                            </label>
                          </td>
                          <td className="Product-list-item-image">
                            <img
                              alt="img"
                              src="http://images.voonik.com/71845882/casual-shoes-for-men-sneakers-for-men-designer-shoe-product.jpg?1527147786" />
                          </td>
                          <td className="Product-list-item-title"><h4>Product</h4></td>
                          <td className="Product-list-item-shipping"><h4>Shipping  7-10 days</h4></td>
                          <td className="Product-list-item-price"><h4>US 50$</h4></td>
                          <td className="Product-list-item-merchant"><h4>By <span>Ali-express</span></h4></td>
                          <td className="Product-list-item-actions">
                            <div>
                              <button>View</button>
                              <button className="import">  <Glyphicon glyph="plus" style={{ fontSize: 10 }} /> Import</button>
                            </div>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className="Product-list-action-card">
                <h4>Selected 10 items</h4>
                <button className="Product-list-action-card-remove"> <Glyphicon glyph="remove" style={{ fontSize: 10 }} /> Remove</button>
                <button className="Product-list-action-card-import"> <Glyphicon glyph="plus" style={{ fontSize: 10 }} />Import</button>
              </div>
            </div>

            <div style={{ marginTop: 10 }}>
              <button>1</button>
              <button>2</button>
              <button>3</button>
              <button>4</button>
              <button>5</button>
            </div>

          </div>


        </div>

        <div className="Product-table-footer-mobile">
          <h4>Selected 10 items</h4>
          <button> <Glyphicon glyph="remove" style={{ fontSize: 10 }} /> Remove</button>
          <button> <Glyphicon glyph="plus" style={{ fontSize: 10 }} />Import</button>
        </div>
      </div>
    );
  }
}

export default ProductContainer;
