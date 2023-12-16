import React from 'react';
import Task from './Task';
import { useTaskContext } from '../TaskContext';

const ListTask = ({ filter }) => {
  const { state } = useTaskContext();
  const tasksToShow =
    filter === 'done'
      ? state.tasks.filter((task) => task.isDone)
      : filter === 'notDone'
      ? state.tasks.filter((task) => !task.isDone)
      : state.tasks;

  return (
    <div className="task-list">
      {tasksToShow.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
