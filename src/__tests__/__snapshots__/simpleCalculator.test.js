import React from 'react';
import renderer from 'react-test-renderer';
import Calculator from '../../components/simpleCalculator';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
