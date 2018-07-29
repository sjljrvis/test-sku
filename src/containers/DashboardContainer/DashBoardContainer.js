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

            <h4> Product list</h4>
            <div className="Card-container">

              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, key) => {
                  return (
                    <div key={key} className="Card-item">
                      <img
                        src="https://ae01.alicdn.com/kf/HTB1_Lu4SXXXXXc3aXXXq6xXFXXXY/Outdoor-Hydration-Backpack-5L-Water-Bag-Backpacks-Portable-Cycling-Camping-Hiking-Climbing-Pouch-Waterbag.jpg" alt='product' />
                      <div>
                        <h5>Tactical Military Molle Bag</h5>
                        <h4 style={{ color: "orange" }}>US $ 45</h4>
                        <h5>By Ali Express</h5>
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
