import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import NavBar from './NavBar';

it('renders without crashing', () => {
  shallow(<NavBar />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<NavBar />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
