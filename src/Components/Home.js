import React, { Component } from 'react';
import TitleList from '../Containers/TitleList';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <p>
          Welcome to <b>Microblog</b>, our innovative site for communicating on
          the information superhighway.
        </p>
        <TitleList />
      </StyledHome>
    );
  }
}

export default Home;
