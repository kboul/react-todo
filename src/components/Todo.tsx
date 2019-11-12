import React from 'react';
import { ITodo } from '../models/ITodo';

export interface TodoProps {
    todo: ITodo;
    index: number;
    completeTodo: (arg1: number) => void;
    removeTodo: (arg1: number) => void;
}

const Todo: React.SFC<TodoProps> = ({
    todo,
    index,
    completeTodo,
    removeTodo
}) => {
    return (
        <div data-test="component-todo" className="col-md-6 offset-md-3">
            <li
                className="list-group-item"
                data-test="todo-list"
                style={{
                    textDecoration: todo.isCompleted ? 'line-through' : ''
                }}>
                {todo.text}
                <button
                    className="btn btn-primary btn-sm float-right ml-2"
                    data-test="remove-todo-btn"
                    onClick={() => removeTodo(index)}>
                    x
                </button>
                <button
                    className="btn btn-primary btn-sm float-right"
                    data-test="complete-todo-btn"
                    onClick={() => completeTodo(index)}>
                    Complete
                </button>
            </li>
        </div>
    );
};

export default Todo;
