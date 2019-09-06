import React, { useState } from 'react';
import Todo from './Todo';
import { todos as todosData } from '../mockData/todos';

export interface MainProps {}

const Main: React.SFC<MainProps> = () => {
    const [todos, setTodos] = useState(todosData);

    return (
        <div className="app">
            <div className="todoList">
                {todos.map((todo, id) => (
                    <Todo key={id} index={id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default Main;
