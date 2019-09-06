import React, { useState } from 'react';
import Todo from './Todo';

export interface MainProps {}

const Main: React.SFC<MainProps> = () => {
    const [todos, setTodos] = useState([
        {
            text: 'Learn about React',
            isCompleted: false
        },
        {
            text: 'Meet friend for lunch',
            isCompleted: false
        },
        {
            text: 'Go out with Ioanna',
            isCompleted: false
        }
    ]);

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
