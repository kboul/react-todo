import React from 'react';
import { shallow } from 'enzyme';
import Main from '.';
import { findByTestAttr } from '../test/testUtils';
import { todos } from './mockData/todos';

const setup = () => {
    return shallow(<Main />);
};

test('Main renders without error', () => {
    const wrapper = setup();
    const componentMain = findByTestAttr(wrapper, 'component-todos');
    expect(componentMain).toHaveLength(1);
});

describe('renders Todo & TodoForm components', () => {
    const mockSetTodos = jest.fn();
    React.useState = jest.fn(() => [todos, mockSetTodos]);

    const wrapper = setup();

    describe('Todo component', () => {
        const todoWrapper = findByTestAttr(wrapper, 'component-todo');

        test('renders Todo component without error', () => {
            expect(todoWrapper).toHaveLength(todos.length);
        });

        test('Todo has object prop todo & completeTodo, removeTodo function props', () => {
            const componentTodo = todoWrapper.find('Todo');

            todos.forEach((todo, index) => {
                expect(componentTodo.at(index).prop('todo')).toBeInstanceOf(
                    Object
                );
            });

            todos.forEach((todo, index) => {
                expect(
                    componentTodo.at(index).prop('completeTodo')
                ).toBeInstanceOf(Function);
            });

            todos.forEach((todo, index) => {
                expect(
                    componentTodo.at(index).prop('removeTodo')
                ).toBeInstanceOf(Function);
            });
        });

        test('completeTodo logic runs as expected', () => {
            const firstTodo = wrapper.find('Todo').at(0);
            (firstTodo.props() as any).completeTodo(0);
            wrapper.update();
            expect(mockSetTodos).toHaveBeenCalled();
        });

        test('removeTodo logic runs as expected', () => {
            const firstTodo = wrapper.find('Todo').at(0);
            (firstTodo.props() as any).removeTodo(1);
            wrapper.update();
            expect(mockSetTodos).toHaveBeenCalled();
        });
    });

    describe('TodoForm component', () => {
        const todoFormWrapper = findByTestAttr(wrapper, 'component-todo-form');

        test('renders TodoForm component without error', () => {
            expect(todoFormWrapper).toHaveLength(1);
        });

        test('TodoForm has addTodo function prop', () => {
            expect(
                todoFormWrapper.find('TodoForm').prop('addTodo')
            ).toBeInstanceOf(Function);
        });

        test('addTodo logic runs as expected', () => {
            const todoForm = todoFormWrapper.find('TodoForm');
            (todoForm.props() as any).addTodo();
            wrapper.update();
            expect(mockSetTodos).toHaveBeenCalled();
        });
    });
});
