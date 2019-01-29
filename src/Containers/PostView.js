import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostDetails from '../Components/PostDetails';
import { deletePost, savePost } from '../actionCreators';
import PostForm from '../Components/PostForm';
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

  cancel = () => {
    this.props.history.push('/');
  };

  render() {
    if (this.state.isEditing) {
      return (
        <PostForm
          post={this.props.post}
          savePost={this.savePost}
          cancel={this.cancel}
        />
      );
    } else {
      return (
        <PostDetails
          post={this.props.post}
          deletePost={this.deletePost}
          toggleEdit={this.toggleEdit}
        />
      );
    }
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
  console.log(postId);
  return {
    post: state.posts[postId]
  };
}

const connectedComponent = connect(
  mapStateToProps,
  { deletePost, savePost }
);

export default connectedComponent(PostView);
