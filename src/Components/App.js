import React, { Component } from 'react';
import Routes from '../Routes';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  background-color: pink;
  width: 80vw;
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
