import React, { Component } from 'react';
import Routes from '../Routes';
import styled from 'styled-components';

const StyledApp = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: pink;
  width: 80vw;
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
