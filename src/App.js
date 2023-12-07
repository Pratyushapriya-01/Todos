import './App.css';
import React, { useState, useEffect } from 'react';
import Header from "./Mycomponents/Header";
import { Todos } from "./Mycomponents/Todos";
import { AddTodo } from "./Mycomponents/AddTodo";
import { Footer } from "./Mycomponents/Footer";
import { About } from "./Mycomponents/About";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // let index= todos.indexOf(todo);
    // todos.splice(index,1);

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));//local storage is used to store the items in the form of key:value pair
  }
  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc)
    let sno;
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <Router>
        <Header title={"My Todos List"} searchBar={false} />
        <Switch>
          <Route exact path='/' render={() => {
            return (
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>)
          }}>
          </Route>
          <Route exact path="/about" component={About}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );

}
export default App;
