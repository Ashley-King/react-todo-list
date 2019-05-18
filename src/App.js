import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
