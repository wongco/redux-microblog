import React, { Component } from 'react';
import Routes from '../Routes';
import styled from 'styled-components';

const StyledApp = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 60vw;
  margin-left: auto;
  margin-right: auto;
`;

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Routes />
      </StyledApp>
    );
  }
}

export default App;
