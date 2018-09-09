import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeContainer from '../HomeContainer'
import LoginContainer from '../LoginContainer'
import DashBoardContainer from '../DashboardContainer'
import ProductContainer from '../ProductContainer'
import EditProductContainerNew from '../EditProductContainerNew';

class App extends Component {

  render() {
    return (
      <div>

        <Switch>

          <Route exact path="/home" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          <Route exact path="/info" component={DashBoardContainer} />
          <Route exact path="/product" component={ProductContainer} />
          <Route exact path="/" component={EditProductContainerNew} />
          
        </Switch>

      </div>
    );
  }
}

export default App;
