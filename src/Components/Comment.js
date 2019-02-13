import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

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

Comment.propTypes = {};

Comment.defaultProps = {
  id: '12',
  comment: 'Sample Comment',
  deleteComment: () => console.log('Removing Comment!')
};

export default Comment;
