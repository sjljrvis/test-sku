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



  render() {

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>

        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
          <DashboardHeader />

          <div className="Product-list" style={{ paddingLeft: 30, paddingRight: 30, display: "flex", justifyContent: "center" }}>

            <table style={{ width: "80%" }}>
              <tbody>
                <tr className="Product-list-item">
                  <th></th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>

                <tr className="Product-list-item">
                  <td>
                    <img
                      style={{ height: 75, width: 75 }}
                      alt="img"
                      src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" />
                  </td>
                  <td>Smith</td>
                  <td>50$</td>
                  <td>
                    <div style={{}}>
                      <button>View</button>
                      <button>View</button>
                    </div>
                  </td>
                </tr>

                <tr className="Product-list-item">
                  <td>
                    <img
                      style={{ height: 75, width: 75 }}
                      alt="img"
                      src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" />
                  </td>
                  <td>Smith</td>
                  <td>50$</td>
                  <td>
                    <div style={{}}>
                      <button>View</button>
                      <button>View</button>
                    </div>
                  </td>
                </tr>

                <tr className="Product-list-item">
                  <td>
                    <img
                      style={{ height: 75, width: 75 }}
                      alt="img"
                      src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" />
                  </td>
                  <td>Smith</td>
                  <td>50$</td>
                  <td>
                    <div style={{}}>
                      <button>View</button>
                      <button>View</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* <div className="Product-list-item">

              <img
                style={{ height: 75, width: 75, marginLeft: 75 }}
                alt="img"
                src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" />

              <h4 style={{ marginLeft: 75 }}>title</h4>

              <h4 style={{ marginLeft: 75 }}>Price</h4>

              <div style={{ marginLeft: 75 }}>
                <button>View</button>
                <button>View</button>
              </div>

            </div>

            <div className="Product-list-item">

              <img
                style={{ height: 75, width: 75 }}
                alt="img"
                src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" />

              <h4>titledsdsddsds</h4>

              <h4>Price</h4>

              <div>
                <button>View</button>
                <button>View</button>
              </div>

            </div> */}



          </div>

        </div>


      </div>
    );
  }
}

export default ProductContainer;
