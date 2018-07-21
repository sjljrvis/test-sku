import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';


import HomeContainer from '../HomeContainer'
import LoginContainer from '../LoginContainer'

class App extends Component {

  render() {
    return (
      <div>

        <Switch>

          <Route exact path="/" component={HomeContainer} />
          <Route exact path="/login" component={LoginContainer} />
          
        </Switch>

      </div>
    );
  }
}

export default App;
