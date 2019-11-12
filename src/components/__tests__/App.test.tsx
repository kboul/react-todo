import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => {
    return shallow(<App />);
};

test('renders without error', () => {
    const component = findByTestAttr(setup(), 'component-app');
    expect(component).toHaveLength(1);
});
