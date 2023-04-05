import React from "react";
import TodoItems from "./TodoItems";

const Todos = (props) => {    
  return (
    <div className="container">
        <h2 className="my-3">Todos List</h2>
        {(props.todos.length===0)?
          <h5>Todo is Empty!</h5>:
        props.todos.map((todo) => {
        //{console.log(todo.sno)}
        return (<TodoItems todo={todo} key={todo.sno} onDelete= {props.onDelete} />);
        })}
    </div>
  );
};

export default Todos;
