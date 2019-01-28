import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledTitleList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  margin: 50px;
`;

const StyledTitleCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: 1px solid lightgray;
  box-shadow: 0px 2px 18px gray;
  border-radius: 5px;
  margin: 20px;
  padding: 20px;
  height: 75px;
  width: 20vw;
`;

class TitleList extends Component {
  render() {
    return (
      <StyledTitleList>
        {Object.keys(this.props.posts).map(id => {
          const { title, description } = this.props.posts[id];
          return (
            <StyledTitleCard key={id}>
              <Link to={`/${id}`}>
                <div>{title}</div>
              </Link>
              <div>{description}</div>
            </StyledTitleCard>
          );
        })}
      </StyledTitleList>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  };
}

const connectedComponent = connect(mapStateToProps);

export default connectedComponent(TitleList);
