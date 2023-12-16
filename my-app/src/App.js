import React from 'react';
import { TaskProvider } from '../src/TaskContext';
import AddTask from './component/AddTask';
import ListTask from './component/ListTask';

const App = () => {
  return (
    <TaskProvider>
      <div className="app">
        <h1>Todo List</h1>
        <AddTask />
        <ListTask filter="all" />
        {/* You can add additional ListTask components with different filters */}
      </div>
    </TaskProvider>
  );
};

export default App;
