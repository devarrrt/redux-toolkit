import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { addTodo } from './store/reducers/todoSlice'

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addTodo(text));
      setText('');
    }
  }

  return (
    <div className='app'>
      <InputField
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      <TodoList />
    </div>
  );
}

export default App;


 // const addTodo = () => {
  //   const newTodo = {
  //     id: new Date().toISOString(),
  //     text: value,
  //     complited: false
  //   }
  //   if (value.trim().length) {
  //     setTodos([...todos, newTodo])
  //   }
  //   setValue("")
  // }

  // const removeTodo = (id) => {
  //   const newTodos = todos.filter(el => el.id !== id)
  //   setTodos(newTodos)
  // }

  // const handleCheck = (id) => {
  //   const newTodo = todos.map(el => {
  //     if (el.id !== id) {
  //       return el
  //     }
  //     return {
  //       ...el,
  //       complited: !el.complited
  //     }
  //   })
  //   setTodos(newTodo)
  // }
