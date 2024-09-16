// import {  onAuthStateChanged } from "firebase/auth";
// import { auth } from "../Config/firebase/firsebase";
import React, { useRef, useState } from 'react'


const Home = () => {
  const todo = useRef();
  const [todoRender , setTodo] = useState(null)
   
  // function checkUser(){
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //       console.log(uid);
  //     } else {
  //       alert('login')
  //     }
  //   });
  // }
  // checkUser()

  const addTodo = (event) => {
    event.preventDefault();
    console.log(todo.current.value);
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
      
    </>
  )
}

export default Home