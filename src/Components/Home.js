import React, { Component } from 'react';
import TitleList from '../Containers/TitleList';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
`;

const StyledHeader = styled.p`
  padding: 0 1em;
`;

class Home extends Component {
  render() {
    return (
      <StyledHome>
        <StyledHeader>
          Welcome to <b>Microblog</b>, our innovative site for communicating on
          the information superhighway.
        </StyledHeader>
        <TitleList />
      </StyledHome>
    );
  }
}

export default Home;
