const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory task list
let tasks = [
  {
    "id": 2,
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false
 }
];

// GET all tasks
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// GET task by ID
app.get('/tasks/:id', (req, res) => {
    const id = req.params.id;
    const task = tasks.find(t => t.id == id);
    if (!task) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(task);
  });

// POST /tasks - Create a new task
app.post('/tasks', (req, res) => {
    const { title, description, completed } = req.body;
  
    const newTask = {
      id: 3,
      title: title,
      description: description,
      completed: completed || false
    };
  
    tasks.push(newTask);
    res.status(201).json(newTask);
  });

// PUT update task
app.put('/tasks/:id', (req, res) => {
  const task = tasks.find(t => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ message: 'Task not found' });

  const { title, description, completed } = req.body;
  task.title = title;
  task.description = description;
  task.completed = completed;
  res.json(task);
});

// DELETE task
app.delete('/tasks/:id', (req, res) => {
  const index = tasks.findIndex(t => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Task not found' });

  tasks.splice(index, 1);
  res.status(204).send();
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});