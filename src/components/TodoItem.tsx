import React, { FC } from 'react';
import { ITodo } from '../types/types';

interface TodoItemProps {
    todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({todo}) => {
    return (
        <li >
            <input type="checkbox" checked={todo.completed} readOnly/>
            <span>{todo.id}. { todo.title}</span>
        </li>
    );
};

export default TodoItem;