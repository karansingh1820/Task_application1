const Task = require('../models/taskModel');

exports.getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.id });
        res.json(tasks);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.createTask = async (req, res) => {
    const { title, description, column } = req.body;

    try {
        const newTask = new Task({ title, description, column, user: req.user.id });
        const task = await newTask.save();
        res.json(task);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.updateTask = async (req, res) => {
    const { title, description, column } = req.body;

    try {
        let task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        task = await Task.findByIdAndUpdate(req.params.id, { title, description, column }, { new: true });

        res.json(task);
    } catch (error) {
        res.status(500).send('Server error');
    }
};

exports.deleteTask = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);

        if (!task) {
            return res.status(404).json({ msg: 'Task not found' });
        }

        if (task.user.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await task.remove();

        res.json({ msg: 'Task removed' });
    } catch (error) {
        res.status(500).send('Server error');
    }
};
