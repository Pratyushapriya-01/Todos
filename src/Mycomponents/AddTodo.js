import React, { useState } from 'react';


export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  //changing the state variable using usestate
  //and again changing by calling desc function
  const submit = (e) => {
    e.preventDefault();
    //This is used for not reloading this page
    if (!title || !desc) {
      alert("Title or description can not be blanked")
    }
    else{
      addTodo(title, desc);
      //this function will add the recently added todo to the todos list
      setTitle("");
      setDesc("");// after adding the title n desc this function made it invisible 
    }
  }
  return (
    <div className='container my-3'>
      <h3>Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Todo Title</label>
          <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">Todo Description</label>
          <input type="text" value={desc} onChange={(e) => { setDesc(e.target.value) }} className="form-control" id="desc" />
        </div>
        <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
      </form></div>
  )
}
