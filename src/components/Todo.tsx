import * as React from 'react';
import { ITodo } from '../models/ITodo';

export interface TodoProps {
    todo: ITodo;
    index: number;
}

const Todo: React.SFC<TodoProps> = ({ todo, index }) => {
    return (
        <div className="col-md-6 offset-md-3">
            <li className="list-group-item">{todo.text}</li>
        </div>
    );
};

export default Todo;
