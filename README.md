**Task Manager API**

**Overview**
This is a basic API built with Express.js for managing tasks. You can
View all tasks
View a specific task by its ID
Add new tasks
Update existing tasks
Delete tasks

**Instructions**
How to Get Started
1. Clone the Project
git clone <repository-url>
cd task-manager-api
2. Install Nodemon (Optional but Recommended)
Nodemon is a tool that helps by automatically restarting the server whenever you make changes to your code.
npm install -g nodemon
Or you can use it with npx (without installing it globally):
npx nodemon app.js
Run the Server
To run the server, use:
npm start
Now your API should be running at http://localhost:3000.

**API Endpoints**

**1. GET /tasks**
Description: Get all tasks.
GET http://localhost:3000/tasks
Results:
[
    {
        "id": 2,
        "title": "Create a new project",
        "description": "Create a new project using Magic",
        "completed": false
    }
]

**2. GET /tasks/:id**
Description: Get a specific task by ID.
GET http://localhost:3000/tasks/:id
Here we passed path param as 2
Results:
{
    "id": 2,
    "title": "Create a new project",
    "description": "Create a new project using Magic",
    "completed": false
}

**3. POST /tasks**
Description: Create a new task.
POST http://localhost:3000/tasks
Created a new task with with the object,
{
  "title": "Task submission",
  "description": "Haven't submitted the task"
}
Results:
{
    "id": 3,
    "title": "Task submission",
    "description": "Haven't submitted the task",
    "completed": false
}

**4. PUT /tasks/:id**
Description: Update an existing task by ID.
PUT http://localhost:3000/tasks/:id
Updated the description and completed properties
Results:
{
    "id": 3,
    "title": "Task submission",
    "description": "Submitted the task",
    "completed": true
}

**5. DELETE /tasks/:id**
Description: Delete a task by ID.
DELETE http://localhost:3000/tasks/:id
Delted the earlier object, id = 2. Now we only have id = 3 
Results:
[
  {
    "id": 3,
    "title": "Task submission",
    "description": "Submitted the task",
    "completed": true
  }
]

**Conclusion**
This is a simple API for managing tasks. It shows how to handle basic CRUD operations using Express.js
You can play further with other API endpoints. Like, http://localhost:3000/tasks?completion=true that gives the tasks which have completion status true.
