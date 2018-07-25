import React, { Component } from 'react';


import './style/index.css';

class DashBoardContainer extends Component {

  constructor(props) {
    super(props)
    this.state = {
    }
  }


  render() {

    let { width, className } = this.state;

    return (
      <div>
        <div
          className="App-side-bar"
          style={{ backgroundColor: "#01477a", height: '100vh' }}
        >

          <div style={{ display:"flex", flexDirection: "column", justifyContent: "space-between" }}>

            <div>

              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", height: 50, backgroundColor: "#FFFFFF", padding: 10 }}>
                <img src="../../../assets/box.svg" alt="dashboard" style={{ width: 30, height: 30, marginRight: 10 }} />
                <h4 style={{ color: '#2a7cf7', fontSize: 20 }}>dropsku</h4>
              </div>


              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
                <img src="../../../assets/order.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
                <h4>Orders</h4>
              </div>

              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
                <img src="../../../assets/graphic.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
                <h4>Dashboard</h4>
              </div>

              <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", marginTop: 25, marginLeft: 15 }}>
                <img src="../../../assets/notification.svg" alt="dashboard" style={{ width: 20, height: 20, marginRight: 10 }} />
                <h4>Notification</h4>
              </div>

            </div>

            <div>


            </div>

          </div>





        </div>
      </div>
    );
  }
}

export default DashBoardContainer;
