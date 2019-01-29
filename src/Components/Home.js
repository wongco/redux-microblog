import React, { Component } from 'react';
import TitleList from '../Containers/TitleList';
//import styled from 'styled-components';

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <p>
          Welcome to <b>Microblog</b>, our innovative site for communicating on
          the information superhighway.
        </p>
        <TitleList />
      </div>
    );
  }
}

export default Home;
