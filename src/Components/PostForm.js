import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 30vw;
`;

const StyledTextArea = styled.textarea`
  width: 30vw;
`;

const StyledButton = styled.button`
  width: 60px;
  padding: 5px 10px;
`;

/** Component for adding a new Post to Redux State */
class PostForm extends Component {
  // controlled component input
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  // invoke addPost actionCreator and then redirect to homepage
  handleSubmit = evt => {
    evt.preventDefault();
    this.props.savePost({ ...this.state });
  };

  // redirect to homepage
  handleCancel = () => {
    this.props.cancel();
  };

  render() {
    return (
      <div className="PostForm">
        <StyledForm onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title</label>
          <StyledInput
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <label htmlFor="desc">Description</label>
          <StyledInput
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <label htmlFor="body">Body</label>
          <StyledTextArea
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            rows={10}
          />
          <div>
            <StyledButton>Save</StyledButton>
            <StyledButton type="button" onClick={this.handleCancel}>
              Cancel
            </StyledButton>
          </div>
        </StyledForm>
      </div>
    );
  }

  state = {
    title: this.props.post.title,
    description: this.props.post.description,
    body: this.props.post.body
  };
}

PostForm.propTypes = {};

PostForm.defaultProps = {
  post: {
    title: '',
    description: '',
    body: ''
  },
  savePost: () => console.log('Placeholder for savePost function'),
  cancel: () => console.log('cancel')
};

export default PostForm;
