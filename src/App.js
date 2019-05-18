import React, { Component } from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.css";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

class App extends Component {
  state = {
    items: [
      {
        id: 1,
        title: "wake up"
      },
      {
        id: 2,
        title: "make breakfast"
      },
      {
        id: 3,
        title: "go to work"
      }
    ],
    id: uuid(),
    item: "",
    editItem: false
  };
  handleChange = e => {
    console.log("handleChange");
  };

  handleSubmit = e => {
    console.log("handleSubmit");
  };

  clearList = () => {
    console.log("clearList");
  };

  handleEdit = id => {
    console.log(`handleEdit ${id}`);
  };

  handleDelete = id => {
    console.log(`handleDelete ${id}`);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
