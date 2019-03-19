import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('matches snapshot for default criteria', () => {
  const wrapper = shallow(<App />);
  const serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot();
});
