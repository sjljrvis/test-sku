import React, { Component } from 'react';
import Header from '../../components/Header'
import HomeContent from '../../components/HomeContent'
import Footer from '../../components/Footer'

class HomeContainer extends Component {

  render() {
    
    return (
      <div>
        <Header history={this.props.history}/>
        <HomeContent history={this.props.history}/>
        <Footer history={this.props.history}/>
      </div>
    );
  }
}

export default HomeContainer;
