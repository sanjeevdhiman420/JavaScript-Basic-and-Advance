import logo from './logo.svg';
import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import React, { useState } from 'react';
function App() {
  const onDelete = (todo)=>{
    console.log("delete",todo);
    setTodos(todos.filter((e)=>{
      return e!== todo;
    }));
  }
  
  const [todos, setTodos] = useState([
    {
      sno:1,
      title: "go to the market",
      desc: "you need to go to the market"
    },
    {
      sno:2,
      title: "go to the mall",
      desc: "you need to go to the mall"
    },    {
      sno:3,
      title: "go to the ghat",
      desc: "you need to go to the ghat"
    }
  ]);
  return (
   <>
   <Header title="My react sites" searchBar={true}/>
   <AddTodo/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
/**
 * dfgdnjkgnnnnnnnnvlkhloj
 */
