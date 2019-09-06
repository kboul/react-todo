import * as React from 'react';
import { Todo as TodoModel } from '../models/Todo';

export interface TodoProps {
    todo: TodoModel;
    index: number;
}

const Todo: React.SFC<TodoProps> = ({ todo, index }) => {
    return <div className="todo">{todo.text}</div>;
};

export default Todo;
