import React, { useEffect, useState } from 'react';
import { getTasks, createTask, updateTask, deleteTask } from '../api/api';
import TaskBoard from '../components/TaskBoard';

const HomePage = () => {
    const [tasks, setTasks] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchTasks = async () => {
            const data = await getTasks(token);
            setTasks(data);
        };

        fetchTasks();
    }, [token]);

    const handleCreateTask = async (taskData) => {
        const newTask = await createTask(taskData, token);
        setTasks([...tasks, newTask]);
    };

    const handleUpdateTask = async (id, taskData) => {
        const updatedTask = await updateTask(id, taskData, token);
        setTasks(tasks.map((task) => (task._id === id ? updatedTask : task)));
    };

    const handleDeleteTask = async (id) => {
        await deleteTask(id, token);
        setTasks(tasks.filter((task) => task._id !== id));
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <TaskBoard
                tasks={tasks}
                onCreateTask={handleCreateTask}
                onUpdateTask={handleUpdateTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
};

export default HomePage;
