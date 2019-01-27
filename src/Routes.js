import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
// import PostForm from './Components/PostForm';
import styled from 'styled-components';
import PostFormContainer from './Containers/PostFormContainer';

const StyledRoutes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

class Routes extends Component {
  render() {
    return (
      <StyledRoutes>
        <NavBar />
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route
            exact
            path="/new"
            render={props => <PostFormContainer {...props} />}
          />
          <Route render={() => <div>CatchAllRoute</div>} />
        </Switch>
      </StyledRoutes>
    );
  }
}

export default Routes;
