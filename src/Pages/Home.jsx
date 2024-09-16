
import React, { useRef, useState } from 'react'


const Home = () => {
  const todo = useRef();
  let [todoRender , setTodos] = useState([]);
   
  const addTodo = (event) => {
    event.preventDefault();
    todoRender.push(todo.current.value)
    setTodos([...todoRender])
    todo.current.value = ''
  }

  return (
    <>
      <div className='text-center'>
        <h1 className='text-4xl mt-5'>Todo App</h1>
        <form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Enter Todo"
            className="mt-5 input input-bordered w-[20rem] m-7"
            ref={todo}
          />
          <button className="btn btn-info mt-5">Add Todo</button>
        </form>
      </div>
      {todoRender.map((item, index) => (
        <div key={index} className='text-center'>
          <li>{item}</li> 
        </div>
      ))}
    </>
  )
}

export default Home