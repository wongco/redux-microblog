import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: lightgray;
  width: 100%;
  border-radius: 0.5em;
  box-shadow: 0px 0px 18px gray;
  padding: 3em;
`;

const StyledNavTitle = styled.p`
  font-size: 300%;
  margin: 0px;
`;

const StyledNavLinkContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
`;

const StyledNavLink = styled(NavLink)`
  padding-right: 10px;
  text-decoration: none;
  color: blue;
`;

class NavBar extends Component {
  render() {
    return (
      <StyledNav>
        <div>
          <StyledNavTitle>Microblog</StyledNavTitle>
          <p>Get in the Rithm of Blogging!</p>
        </div>
        <StyledNavLinkContainer>
          <StyledNavLink to="/">Blog</StyledNavLink>
          <StyledNavLink to="/new">Add a new post</StyledNavLink>
        </StyledNavLinkContainer>
      </StyledNav>
    );
  }
}

export default NavBar;
