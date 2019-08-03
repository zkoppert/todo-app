import React from 'react';
import './App.css';
import TodoItem from './TodoItem.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
      </header>
      <div>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
