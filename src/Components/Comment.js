import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';

const StyledCommentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledComment = styled.div`
  padding: 10px;
`;

class Comment extends Component {
  // handles delete action for specific comment
  handleDelete = () => {
    this.props.deleteComment(this.props.id);
  };

  render() {
    return (
      <StyledCommentContainer>
        <FontAwesomeIcon
          style={{ color: 'red', cursor: 'pointer' }}
          icon={faTimesCircle}
          onClick={this.handleDelete}
        />
        <StyledComment>{this.props.comment}</StyledComment>
      </StyledCommentContainer>
    );
  }
}

Comment.propTypes = {
  id: PropTypes.string,
  comment: PropTypes.string,
  deleteComment: PropTypes.func
};

Comment.defaultProps = {
  id: '12',
  comment: 'Sample Comment',
  deleteComment: () => console.log('Removing Comment!')
};

export default Comment;
