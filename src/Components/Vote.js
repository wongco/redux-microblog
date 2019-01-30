import React, { Component } from 'react';
import styled from 'styled-components';

const StyledVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px 0;
`;

class Vote extends Component {
  handleUpVote = () => this.props.voteAction('up');
  handleDownVote = () => this.props.voteAction('down');

  render() {
    return (
      <StyledVoteContainer>
        <div>{`${this.props.votes} votes`}</div>
        <button onClick={this.handleUpVote}>UpVote</button>
        <button onClick={this.handleDownVote}>DownVote</button>
      </StyledVoteContainer>
    );
  }

  state = {};
}

Vote.propTypes = {};

Vote.defaultProps = {
  votes: 2,
  voteAction: () => console.log('voting in Vote')
};

export default Vote;
