import { ITodo } from '../models';

export interface TodoProps {
    todo: ITodo;
    index: number;
    completeTodo: (arg1: number) => void;
    removeTodo: (arg1: number) => void;
}
