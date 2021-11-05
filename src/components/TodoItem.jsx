import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodo, toggleStatus } from '../store/reducers/todoSlice'

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch()

    return (
        <li className="item">
            <input
                type="checkbox"
                onChange={() => dispatch(toggleStatus(id))}
                checked={completed} />
            <span className="text"> {title} </span>
            <span
                onClick={() => dispatch(deleteTodo(id))}
                className="delete"> &times; </span>
        </li>
    )
}

export default TodoItem
