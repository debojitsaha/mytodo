import React, { useState } from "react";

const AddTodos = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if(!title || !desc)
        alert("Title or Description can't be empty")
    else
    {
        addTodo(title, desc);
        setTitle("")
        setDesc("")
    }
  };

  return (
    <div className="container col-5">
      <form onSubmit={submit}>
        <div className="mb-3 my-5">          
          <input
            type="text"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter Todo Title"
          />
        </div>
        <div className="mb-3">          
          <input
            type="text"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Todo Description"
          />
        </div>        
        <button type="submit" className="btn btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodos;
