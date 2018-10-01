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
    let { activeClass } = this.props;
    return (
      <div className="app-sidebar" style={{ height: 500, width: 90 }}>
        <div className="app-sidebar-item" onClick={() => this.props.history.push('/product')}>
          <h4 style={{ fontWeight: 300, fontSize: 16, color: activeClass === "Products" ? "#2a7cf7" : null }}>
            <ion-icon name="ios-archive" style={{ marginRight: 5 }}></ion-icon>Products</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16, color: activeClass === "Orders" ? "#2a7cf7" : null }}>
            <ion-icon name="ios-cart" style={{ marginRight: 5 }}></ion-icon> Orders</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16, color: activeClass === "Messages" ? "#2a7cf7" : null }} >
            <ion-icon name="chatboxes" style={{ marginRight: 5 }}></ion-icon>Messages</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16, color: activeClass === "Analytics" ? "#2a7cf7" : null }}>
            <ion-icon name="stats" style={{ marginRight: 5 }}></ion-icon>Analytics</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16, color: activeClass === "Store" ? "#2a7cf7" : null }}>
            <ion-icon name="pricetag" style={{ marginRight: 5 }}></ion-icon>Store</h4>
        </div>

        <div className="app-sidebar-item">
          <h4 style={{ fontWeight: 300, fontSize: 16, color: activeClass === "Billing" ? "#2a7cf7" : null }}>
            <ion-icon name="cash" style={{ marginRight: 5 }}></ion-icon>Billing</h4>
        </div>

      </div >
    );
  }
}

export default DashboardSidebar;
