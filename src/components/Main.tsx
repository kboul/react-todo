import React, { useState } from 'react';
import Todo from './Todo';
import { todos as todosData } from '../mockData/todos';
import TodoForm from './TodoForm';
import { ITodo } from '../models/ITodo';

const Main: React.SFC = () => {
    const [todos, setTodos] = useState<Array<ITodo>>(todosData);

    const addTodo = (text: string) => {
        const newTodos: Array<ITodo> = [...todos, { text, isCompleted: false }];
        setTodos(newTodos);
    };

    const completeTodo = (index: number) => {
        const newTodos: Array<ITodo> = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const removeTodo = (index: number) => {
        const newTodos: Array<ITodo> = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <div className="todoList">
                <ul className="list-group">
                    {todos.map((todo: ITodo, id: number) => (
                        <Todo
                            key={id}
                            index={id}
                            todo={todo}
                            completeTodo={completeTodo}
                            removeTodo={removeTodo}
                        />
                    ))}
                </ul>
                <TodoForm addTodo={addTodo} />
            </div>
        </div>
    );
};

export default Main;
