import React, { useState } from 'react';
import { useTaskContext } from '../TaskContext';

const AddTask = () => {
  const { dispatch } = useTaskContext();
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      dispatch({
        type: 'ADD_TASK',
        payload: {
          id: Date.now(),
          description: newTask,
          isDone: false,
        },
      });
      setNewTask('');
    }
  };

  return (
    <div className="add-task">
      <input
        type="text"
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default AddTask;