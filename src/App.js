import "./App.css";
import React,{useState, useEffect} from "react";
import Navbar from "./components/Navbar"
import { About } from "./components/About";
import AddTodos from "./components/AddTodos"
import Todos from "./components/Todos"
import Footer from "./components/Footer"
import { HashRouter as Router, Route, Switch } from 'react-router-dom';



function App() {
  let initTodo;
  if(localStorage.getItem('todos')===null)
    initTodo=[]
  else
    initTodo= JSON.parse(localStorage.getItem('todos'))
  
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  
  const addTodo= (title,desc)=> {
    let sno;
    if(todos.length!==0)
      sno= todos[todos.length-1].sno+1
    else
      sno=1
    let myTodo= {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodos([...todos, myTodo])
    //console.log(sno)
  }
  
  const onDelete= (todo)=> {
    //console.log("Deleted");
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }))
    localStorage.setItem('todos',JSON.stringify(todos))
  }
  
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
          <Route exact path="/" render={()=>{
            return(
              <>
                <AddTodos addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            )
          }}>            
          </Route>
          <Route exact path="/about">
            <About />
          </Route>          
        </Switch>      
      <Footer />
    </Router>
    </>
  );
}

export default App;
