import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { addNewTodo, fetchTodos } from './store/reducers/todoSlice'

function App() {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { status, errors } = useSelector(state => state.todos)

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])

  const handleAction = () => {
    if (text.trim().length) {
      dispatch(addNewTodo(text));
      setText('');
    }
  }

  return (
    <div className='App'>
      <InputField
        value={text}
        updateText={setText}
        handleAction={handleAction}
      />
      {status === 'loading' && <h1> "Loading... </h1>}
      {errors && <h2> An error occured: {errors} </h2> }
      <TodoList />
    </div>
  );
}

export default App;
