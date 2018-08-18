import React, { Component } from 'react';
import SideBar from '../../components/SideBar'
import { Glyphicon } from 'react-bootstrap';

import './style/index.css';

class DashBoardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }

  addOverlay = (id) => {
    window.$("#" + id).addClass("show-overlay")
    window.$("#" + id).removeClass("hide-overlay")
  }
  removeOverlay = (id) => {
    window.$("#" + id).addClass("hide-overlay")
    window.$("#" + id).removeClass("show-overlay")
  }

  componentDidMount() {
    window.$(".Card-item").each(function (id) {
      window.$(this).addClass("hide-overlay")
    })
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

          <div style={{ paddingLeft: 30, width: "100%", paddingLeft: 75, minHeight: "100vh", marginTop: 75 }}>

            <h1>Heyoo !!</h1>
            <h2>Lets get started</h2>
            <div className="gradient-2">
              <div className="Info-cards">
                <h4>Create shopify store</h4>
                <button>create</button>
              </div>
              <div className="Info-cards">
                <h4>Connect store</h4>
                <button>connect</button>
              </div>
              <div className="Info-cards">
                <h4>Find and Add product</h4>
                <button>click</button>
              </div>
              <div className="Info-cards">
                <h4>Make a sell</h4>
                <button>here</button>
              </div>
            </div>

            <div className="gradient">
              <div className="Sub-menu">
                <h5>Mystore</h5>
                <h5>My Products</h5>
                <h5>Billing</h5>
              </div>
            </div>
            <h4> Product list</h4>
            <div className="Card-container">
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0,].map((item, key) => {
                  return (
                    <div key={key} className="Card-item"
                      id={key}
                      onMouseEnter={() => { this.addOverlay(key) }}
                      onMouseLeave={() => { this.removeOverlay(key) }}
                    >
                      <img
                        src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" alt='product' />
                      <div>
                        <h5>Tactical Military Molle Bag</h5>
                        <h4 style={{ color: "orange" }}>US $ 45</h4>
                        <h6>By Ali Express</h6>
                        <button>+ Push</button>
                      </div>
                    </div>
                  )
                })
              }

            </div>




          </div>

        </div>


      </div>
    );
  }
}

export default DashBoardContainer;
