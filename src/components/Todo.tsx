import * as React from 'react';
import { Todo as TodoModel } from '../models/Todo';

export interface TodoProps {
    todo: TodoModel;
    index: number;
}

const Todo: React.SFC<TodoProps> = ({ todo, index }) => {
    return (
        <div className="col-md-6 offset-md-4">
            <li className="list-group-item">{todo.text}</li>
        </div>
    );
};

export default Todo;
