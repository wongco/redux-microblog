import React, { Component } from 'react';
import styled from 'styled-components';

const StyledVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border-top: 1px solid lightgray;
`;

class Vote extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledVoteContainer>
        <div>{`${this.props.votes} votes`}</div>
        <button>UpVote</button>
        <button>DownVote</button>
      </StyledVoteContainer>
    );
  }

  state = {};
}

Vote.propTypes = {};

Vote.defaultProps = {
  votes: 1
};

export default Vote;
