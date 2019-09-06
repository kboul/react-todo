import React, { useState } from 'react';
import styles from '../sass/TodoForm.module.sass';

export interface TodoFormProps {
    addTodo: (arg1: string) => void;
}

const TodoForm: React.SFC<TodoFormProps> = ({ addTodo }) => {
    const [value, setValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <div className="text-center">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className={`input ${styles.input}`}
                    placeholder="Add a todo..."
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </form>
        </div>
    );
};

export default TodoForm;
