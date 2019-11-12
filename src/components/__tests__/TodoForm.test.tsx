import React from 'react';
import { shallow } from 'enzyme';
import TodoForm from '../TodoForm';
import { findByTestAttr } from '../../test/testUtils';

const mockAddTodo = jest.fn();

const setup = () => {
    return shallow(<TodoForm addTodo={mockAddTodo} />);
};

test('TodoForm renders without error', () => {
    const wrapper = setup();
    const componentTodoForm = findByTestAttr(wrapper, 'component-todo-form');
    expect(componentTodoForm).toHaveLength(1);
});

describe('onChange & onSubmit events', () => {
    let mockSetValue = jest.fn();
    let wrapper: any;

    describe('value is empty', () => {
        React.useState = jest.fn(() => ['', mockSetValue]);
        wrapper = setup();

        test('state updates with value of input box upon change', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            const mockEvent = { target: { value: 'new todo' } };
            inputBox.simulate('change', mockEvent);
            expect(mockSetValue).toHaveBeenCalledWith('new todo');
        });

        test('addTodo & setValue do not get called when value is empty', () => {
            mockSetValue.mockClear();
            const form = findByTestAttr(wrapper, 'form-input');
            form.simulate('submit', { preventDefault() {} });
            expect(mockAddTodo).not.toHaveBeenCalled();
            expect(mockSetValue).not.toHaveBeenCalled();
        });
    });

    describe('value is not empty', () => {
        beforeEach(() => {
            mockSetValue.mockClear();
            React.useState = jest.fn(() => ['party', mockSetValue]);
            wrapper = setup();
        });

        describe('handleSubit is called', () => {
            beforeEach(() => {
                const form = findByTestAttr(wrapper, 'form-input');
                form.simulate('submit', { preventDefault() {} });
            });

            test('addTodo is called to add inserted todo', () => {
                expect(mockAddTodo).toHaveBeenCalled();
            });

            test('input value becomes empty', () => {
                expect(mockSetValue).toHaveBeenCalledWith('');
            });
        });
    });
});
