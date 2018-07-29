import React, { Component } from 'react';


import './style/index.css';

class SideBar extends Component {

  constructor(props) {
    super(props)
    this.state = {
      userName: "Sejal"
    }
  }


  render() {

    return (
      <div>
        <div
          className="App-side-bar"
          style={{ backgroundColor: "#F7F9FA", height: '100vh', padding: 5, position: "fixed",zIndex:999 }}
        >

          <div style={{ height: "50%", }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", height: 50, padding: 10 }}>
              <img className="App-logo" src="../../../assets/box.svg" style={{ height: 35, width: 35 }} alt="logo" />
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
              <img src="../../../assets/menu.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
              <h4>Products</h4>
            </div>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
              <img src="../../../assets/cart.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
              <h4>Orders</h4>
            </div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
              <img src="../../../assets/bell.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
              <h4>Notification</h4>
            </div>
          </div>

          {/*
          *
          */}

          <div style={{ height: "50%", display: "flex", flexDirection: "column", justifyContent: "flex-end", paddingBottom: 25 }}>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
              <img src="../../../assets/settings.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
              <h4>Settings</h4>
            </div>


            <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 10 }}>
              <div style={{ width: 30, height: 30, marginRight: 10, backgroundColor: "orange", padding: 2, paddingLeft: 8, borderRadius: 15 }}>
                <h3 style={{ margin: 0, lineHeight: 1, color: "#FFFFFF" }}>{this.state.userName[0]}</h3>
              </div>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default SideBar;
