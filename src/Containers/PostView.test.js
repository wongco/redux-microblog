import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PostView from './PostView';

it('renders without crashing', () => {
  shallow(<PostView />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<PostView />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
