import React, { Component } from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  width: 30vw;
`;

const StyledButton = styled.button`
  width: 60px;
  padding: 5px 10px;
`;

class PostForm extends Component {
  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addPost({ ...this.state });
    this.props.history.push('/');
  };

  handleCancel = () => {
    this.props.history.push('/');
  };

  render() {
    return (
      <div className="PostForm">
        <StyledForm onSubmit={this.handleSubmit}>
          <h3>New Post</h3>

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
          <StyledInput
            type="textarea"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
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
    title: '',
    description: '',
    body: ''
  };
}

PostForm.propTypes = {};

PostForm.defaultProps = {};

export default PostForm;
