import React from 'react';
import TaskCard from './TaskCard';

const Column = ({ task, onUpdateTask, onDeleteTask }) => {
    return (
        <TaskCard
            task={task}
            onUpdateTask={onUpdateTask}
            onDeleteTask={onDeleteTask}
        />
    );
};

export default Column;
