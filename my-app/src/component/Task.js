import React from 'react';
import { useTaskContext } from '../TaskContext';



const Task = ({ task }) => {
  const { dispatch } = useTaskContext();

  const handleToggleTask = () => {
    dispatch({ type: 'TOGGLE_TASK', payload: task.id });
  };

  return (
    <div className={`task ${task.isDone ? 'done' : ''}`}>
      <span onClick={handleToggleTask}>{task.description}</span>
    </div>
  );
};

export default Task;