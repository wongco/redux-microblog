import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from './Home';

it('renders without crashing', () => {
  shallow(<Home />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<Home />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
