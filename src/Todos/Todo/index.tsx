import React, { FC } from 'react';
import { TodoProps } from './models';

const Todo: FC<TodoProps> = ({
    todo,
    index,
    completeTodo,
    removeTodo
}: TodoProps) => {
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
                    type="button"
                    className="btn btn-primary btn-sm float-right ml-2"
                    data-test="remove-todo-btn"
                    onClick={() => removeTodo(index)}>
                    x
                </button>
                <button
                    type="button"
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
