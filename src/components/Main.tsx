import React, { useState } from 'react';
import Todo from './Todo';
import { todos as todosData } from '../mockData/todos';

export interface MainProps {}

const Main: React.SFC<MainProps> = () => {
    const [todos, setTodos] = useState(todosData);

    return (
        <div className="app">
            <div className="todoList">
                <ul className="list-group">
                    {todos.map((todo, id) => (
                        <Todo key={id} index={id} todo={todo} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Main;
