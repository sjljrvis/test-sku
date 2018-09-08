import React, { Component } from 'react';
import './style/index.css';
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap';


class DashboardSidebar extends Component {


  openNav() {
    document.getElementById("appSidenav").style.width = "250px";
  }

  closeNav = () => {
    document.getElementById("appSidenav").style.width = "0";
  }



  render() {
    return (
      <div className="app-sidebar" style={{ height: 500, width: 200 }}>
        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="ios-archive" style={{ marginRight: 5 }}></ion-icon>Products</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16 }}> <ion-icon name="ios-cart" style={{ marginRight: 5 }}></ion-icon> Orders</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="chatboxes" style={{ marginRight: 5 }}></ion-icon>Messages</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="stats" style={{ marginRight: 5 }}></ion-icon>Analytics</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="pricetag" style={{ marginRight: 5 }}></ion-icon>Store</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16 }}><ion-icon name="cash" style={{ marginRight: 5 }}></ion-icon>Billing</h4>
        </div>

      </div>
    );
  }
}

export default DashboardSidebar;
