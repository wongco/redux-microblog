import React, { Component } from 'react';
import styled from 'styled-components';
import Vote from '../Components/Vote';

const StyledPostDetail = styled.div`
  width: 50vw;
`;

const StyledTop = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  margin: 0;
`;

const StyledHeader2 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
`;
class PostDetails extends Component {
  render() {
    const { title, description, body, votes } = this.props.post;
    return (
      <StyledPostDetail>
        <StyledTop>
          <StyledHeader>
            <h1>{title}</h1>
            <div>
              <button onClick={this.props.toggleEdit}>Edit Post</button>
              <button onClick={this.props.deletePost}>Delete Post</button>
            </div>
          </StyledHeader>
          <StyledHeader2>
            <div>{description}</div>
            <Vote votes={votes} voteAction={this.props.voteAction} />
          </StyledHeader2>
        </StyledTop>
        <div>{body}</div>
      </StyledPostDetail>
    );
  }
}

PostDetails.defaultProps = {
  post: {
    title: 'Amazing things',
    description: 'an excercise in biting the dust',
    body: 'eating all day all night lorem ipsum another one bites the dust',
    votes: 1
  },
  toggleEdit: () => console.log('toggle editing in PostView'),
  deletePost: () => console.log('delete the post from redux state'),
  voteAction: () => console.log('voting in PostView ')
};

export default PostDetails;
