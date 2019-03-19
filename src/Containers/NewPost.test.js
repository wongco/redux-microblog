import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NewPost from './NewPost';

it('renders without crashing', () => {
  shallow(<NewPost />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<NewPost />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
