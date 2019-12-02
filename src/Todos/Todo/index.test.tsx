import React from 'react';
import { shallow } from 'enzyme';
import Todo from '.';
import { findByTestAttr } from '../../test/testUtils';

const mockCompleteTodo = jest.fn();
const mockRemoveTodo = jest.fn();

const todo = {
    text: 'new todo',
    isCompleted: true
};

describe('todo.isCompleted is false', () => {
    const newTodo = {
        ...todo,
        isCompleted: false
    };

    const wrapper = shallow(
        <Todo
            todo={newTodo}
            index={1}
            completeTodo={mockCompleteTodo}
            removeTodo={mockRemoveTodo}
        />
    );

    test('has the proper style when todo.isCompleted is false', () => {
        const todoList = findByTestAttr(wrapper, 'todo-list');
        expect(todoList.prop('style')).toHaveProperty('textDecoration', '');
    });
});

describe('todo.isCompleted is true', () => {
    const setup = () => {
        return shallow(
            <Todo
                todo={todo}
                index={1}
                completeTodo={mockCompleteTodo}
                removeTodo={mockRemoveTodo}
            />
        );
    };

    let wrapper: any;

    beforeEach(() => {
        wrapper = setup();
    });

    test('Todo renders without error', () => {
        const componentTodo = findByTestAttr(wrapper, 'component-todo');
        expect(componentTodo).toHaveLength(1);
    });

    test('has the proper style based on todo.isCompleted value', () => {
        const todoList = findByTestAttr(wrapper, 'todo-list');
        expect(todoList.prop('style')).toHaveProperty(
            'textDecoration',
            'line-through'
        );
    });

    test('remove todo simulate click', () => {
        const removeTodoButton = findByTestAttr(wrapper, 'remove-todo-btn');
        removeTodoButton.simulate('click');
        expect(mockRemoveTodo).toHaveBeenCalledTimes(1);
    });

    test('complete todo simulate click', () => {
        const completeTodoButton = findByTestAttr(wrapper, 'complete-todo-btn');
        completeTodoButton.simulate('click');
        expect(mockCompleteTodo).toHaveBeenCalledTimes(1);
    });
});
