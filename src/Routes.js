import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import styled from 'styled-components';
import NewPost from './Containers/NewPost';
import PostView from './Containers/PostView';
import TitleList from './Containers/TitleList';

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
          <Route exact path="/" render={() => <TitleList />} />
          <Route exact path="/new" render={props => <NewPost {...props} />} />
          <Route
            exact
            path="/:postId"
            render={props => <PostView {...props} />}
          />
          <Route render={() => <div>CatchAllRoute</div>} />
        </Switch>
      </StyledRoutes>
    );
  }
}

export default Routes;
