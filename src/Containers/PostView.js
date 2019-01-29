import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetails from '../Components/PostDetails';
import {
  deletePost,
  savePost,
  deleteComment,
  addComment
} from '../actionCreators';
import PostForm from '../Components/PostForm';
import Comment from '../Components/Comment';
import NewComment from '../Components/NewComment';
// import styled from 'styled-components';

class PostView extends Component {
  /** toggles view to edit view */
  toggleEdit = () => {
    this.setState(st => ({ isEditing: !st.isEditing }));
  };

  deletePost = () => {
    const { postId } = this.props.match.params;
    this.props.deletePost(postId);
    this.props.history.replace('/');
  };

  savePost = post => {
    const { postId } = this.props.match.params;
    this.props.savePost(postId, post);
    this.props.history.replace('/');
  };

  deleteComment = commentId => {
    const { postId } = this.props.match.params;
    this.props.deleteComment(postId, commentId);
  };

  addComment = comment => {
    const { postId } = this.props.match.params;
    this.props.addComment(postId, comment);
  };

  render() {
    const { comments } = this.props.post;
    return (
      <div>
        {this.state.isEditing ? (
          <PostForm
            post={this.props.post}
            savePost={this.savePost}
            cancel={this.toggleEdit}
          />
        ) : (
          <PostDetails
            post={this.props.post}
            deletePost={this.deletePost}
            toggleEdit={this.toggleEdit}
          />
        )}
        {Object.keys(comments).map(id => {
          return (
            <Comment
              id={id}
              comment={comments[id]}
              deleteComment={this.deleteComment}
            />
          );
        })}
        <NewComment addComment={this.addComment} />
      </div>
    );
  }

  state = {
    isEditing: false
  };
}

PostView.defaultProps = {
  post: {
    title: 'Amazing thingsk',
    description: 'an excercise in biting the dust',
    body: 'eating all day all night lorem ipsum another one bites the dust'
  }
};

function mapStateToProps(state, props) {
  const { postId } = props.match.params;
  return {
    post: state.posts[postId]
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deletePost, savePost, deleteComment, addComment }
);

export default connectedComponent(PostView);
