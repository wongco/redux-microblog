import React, { Component } from 'react';
import styled from 'styled-components';

const StyledComment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const StyledButton = styled.button`
  border-radius: 5px;
  padding: 5px;
  margin-right: 5px;
`;

class Comment extends Component {
  handleDelete = () => {
    this.props.deleteComment(this.props.id);
  };

  render() {
    return (
      <StyledComment>
        <StyledButton onClick={this.handleDelete}>Delete</StyledButton>
        <p>{this.props.comment}</p>
      </StyledComment>
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
