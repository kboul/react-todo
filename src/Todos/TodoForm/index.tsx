import React, { FunctionComponent } from 'react';
import styles from './index.module.sass';
import { TodoFormProps } from './models';

const TodoForm: FunctionComponent<TodoFormProps> = ({
    addTodo
}: TodoFormProps) => {
    const [value, setValue] = React.useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (!value) return;
        addTodo(value);
        setValue('');
    };

    return (
        <div data-test="component-todo-form" className="text-center">
            <form data-test="form-input" onSubmit={handleSubmit}>
                <input
                    type="text"
                    data-test="input-box"
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
