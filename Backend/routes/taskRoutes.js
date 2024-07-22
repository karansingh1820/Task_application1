const express = require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../controllers/taskController');
const auth = require('../middleware/authMiddleware');

const router = express.Router();

router.route('/')
    .get(auth, getTasks)
    .post(auth, createTask);

router.route('/:id')
    .put(auth, updateTask)
    .delete(auth, deleteTask);

module.exports = router;
