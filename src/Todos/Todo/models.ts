import { ITodo } from '../models/ITodo';

export interface TodoProps {
    todo: ITodo;
    index: number;
    completeTodo: (arg1: number) => void;
    removeTodo: (arg1: number) => void;
}
