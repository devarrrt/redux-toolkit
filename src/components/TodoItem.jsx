import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, checkedTodo } from '../store/reducers/todoSlice'

const TodoItem = ({ id, text, completed }) => {
    const dispatch = useDispatch()

    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => dispatch(checkedTodo(id))}
                checked={completed} />
            <span className="text"> {text} </span>
            <span
                onClick={() => dispatch(removeTodo(id))}
                className="delete"> &times; </span>
        </li>
    )
}

export default TodoItem
