import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetails from '../Components/PostDetails';
import {
  deletePostFromAPI,
  updatePostToAPI,
  deleteComment,
  addComment,
  getPostDetailsFromAPI
} from '../actionCreators';
import PostForm from '../Components/PostForm';
import Comment from '../Components/Comment';
import NewComment from '../Components/NewComment';
// import styled from 'styled-components';

class PostView extends Component {
  componentDidMount() {
    const { postId } = this.props.match.params;

    // if post doesnt exist in redux state, make api call to obtain it
    if (this.props.post.title.length === 0) {
      this.props.getPostDetailsFromAPI(postId);
    }
  }

  /** toggles view to edit view */
  toggleEdit = () => {
    this.setState(st => ({ isEditing: !st.isEditing }));
  };

  deletePost = () => {
    const { postId } = this.props.match.params;
    this.props.deletePostFromAPI(postId);
    this.props.history.replace('/');
  };

  savePost = post => {
    const { postId } = this.props.match.params;
    this.props.updatePostToAPI(postId, post);
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
              key={id}
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
    title: '',
    description: '',
    body: '',
    comments: {}
  },
  getPost: () => console.log('Getting POST from redux/API')
};

function mapStateToProps(state, props) {
  const { postId } = props.match.params;
  return {
    post: state.posts[postId]
  };
}

const connectedComponent = connect(
  mapStateToProps,
  {
    deletePostFromAPI,
    updatePostToAPI,
    deleteComment,
    addComment,
    getPostDetailsFromAPI
  }
);

export default connectedComponent(PostView);
