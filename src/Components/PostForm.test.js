import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostForm from './PostForm';

it('renders without crashing', () => {
  shallow(<PostForm />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<PostForm />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
