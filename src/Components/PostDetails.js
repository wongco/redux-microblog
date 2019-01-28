import React, { Component } from 'react';
//import styled from 'styled-components';

class PostDetails extends Component {
  handleEdit = () => {
    this.props.toggleEdit();
  };

  handleDelete = () => {
    this.props.deletePost();
  };

  render() {
    const { title, description, body } = this.props.post;
    return (
      <div>
        <div>
          <div>
            <h1>{title}</h1>
            <div>{description}</div>
          </div>
          <div>
            <button onClick={this.handleEdit}>Edit Post</button>
            <button onClick={this.handleDelete}>Delete Post</button>
          </div>
        </div>
        <div>{body}</div>
      </div>
    );
  }
}

PostDetails.defaultProps = {
  post: {
    title: 'Amazing things',
    description: 'an excercise in biting the dust',
    body: 'eating all day all night lorem ipsum another one bites the dust'
  },
  toggleEdit: () => console.log('toggle editing in PostView'),
  deletePost: () => console.log('delete the post from redux state')
};

export default PostDetails;
