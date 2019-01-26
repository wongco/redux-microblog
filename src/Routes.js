import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import PostForm from './Components/PostForm';

class Routes extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/new" render={() => <PostForm />} />
          <Route render={() => <div>CatchAllRoute</div>} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
