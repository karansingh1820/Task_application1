import React from 'react';

const TaskCard = ({ task, onUpdateTask, onDeleteTask }) => {
    return (
        <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
            <h4>{task.title}</h4>
            <p>{task.description}</p>
            <button onClick={() => onDeleteTask(task._id)}>Delete</button>
        </div>
    );
};

export default TaskCard;
