import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: space-between;
  background-color: skyblue;
`;

const StyledNavLinkContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <div>
          <h1>Microblog</h1>
          <p>Get in the Rithm of Blogging!</p>
        </div>
        <StyledNavLinkContainer>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/new">Add a new post</NavLink>
        </StyledNavLinkContainer>
      </StyledNav>
    );
  }

  state = {};
}

NavBar.propTypes = {};

NavBar.defaultProps = {};

export default NavBar;
