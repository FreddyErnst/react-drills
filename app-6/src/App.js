import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo  from './Todo'

class App extends Component {
  constructor() {
    super()
    this.state = {
      list: [],
      input: ''
    }
    this.addTask = this.addTask.bind(this)
  }

  handleOnChange (value) {
    this.setState({
      input: value
    })

  }

  addTask  ()  {
    this.setState ({
      list: [...this.state.list, this.state.input],
      input: ''
    })
  }

  render() {
    let list = this.state.list.map((element,index) => {
      return <Todo key={index} task={element} />
    });
    return (
      <div className="App">
        <h1>My Todo List</h1>
        <div>
          <input value={this.state.input}
          placeholder="Enter task"
          onChange={e => this.handleOnChange(e.target.value)}
          
          ></input>
          <button onClick= {this.addTask}>
            Add
          </button>
        </div>

        {list}
       
      </div>
      
    )
  }
}

export default App;
