import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const StyledVoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 7em;
  align-items: center;
  padding: 1em 0;
`;

class Vote extends Component {
  // handlers for vote increment and decrement actions
  handleUpVote = () => this.props.voteAction('up');
  handleDownVote = () => this.props.voteAction('down');

  render() {
    return (
      <StyledVoteContainer>
        <div>{`${this.props.votes} votes`}</div>
        <FontAwesomeIcon
          style={{ color: 'blue', cursor: 'pointer' }}
          icon={faThumbsUp}
          onClick={this.handleUpVote}
        />
        <FontAwesomeIcon
          style={{ color: 'red', cursor: 'pointer' }}
          icon={faThumbsDown}
          onClick={this.handleDownVote}
        />
      </StyledVoteContainer>
    );
  }

  state = {};
}

Vote.propTypes = {
  votes: PropTypes.number,
  voteAction: PropTypes.func
};

Vote.defaultProps = {
  votes: 2,
  voteAction: () => console.log('voting in Vote')
};

export default Vote;
