import React from "react";

const todoItems = (props) => {
  return (
  <>
    <div>
      
      <h4>{props.todo.title}</h4>
      <p>{props.todo.desc}</p>
      <button type="button" className="btn btn-sm btn-danger" onClick={()=>{props.onDelete(props.todo)}}>Remove</button>
      <hr />
    </div>
  </>
  );
};

export default todoItems;
