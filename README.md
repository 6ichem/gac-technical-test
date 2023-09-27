# Todo app

## Description:

Your task is to create a to-do list application using React with hooks and function components, TypeScript, SASS, and HTML5. The application should allow users to add, delete, and mark tasks as completed.

## Requirements:

- Provide an input field and a button to add new tasks to the list. ✅
- Display a list of tasks with checkboxes to indicate completion status. ✅
- Implement functionality to mark tasks as completed when the corresponding checkbox is clicked.
- Include a button or icon next to each task to delete it from the list. ✅
- Apply appropriate styling using SASS to distinguish between completed and pending tasks. ✅
- Use TypeScript for type safety, especially when defining the structure of tasks. ✅

### Optional (if time permits):

- add a dropdown to select category for each todo
- show categories in the todo list
- filter by categories ✅

---

SASS is already installed and configured

Adding 3rd party libraries and reading documentation is allowed.

---

## Starting the project

```
npm install
npm run dev
```

if everything is ok you should get this output.

```

  VITE v4.3.9  ready in 349 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help

```

open the localhost URL in your browser to access the app

---

## API

API base url `https://64905ded1e6aa71680cb200e.mockapi.io/api/`

### **Endpoints**

_/task_

TASK object

```
{
    id: string,
    name: string,
    completed: boolean,
    categoryId: string | null
}
```

| Method | Url       | Params                        |
| ------ | :-------- | :---------------------------- |
| POST   | /task     | { name, completed, category } |
| GET    | /task     | ?{fieldName}={value}          |
| PUT    | /task/:id | { name, completed, category}  |
| DELETE | /task/:id |                               |

_/category_

CATEGORY object

```
{
    id: string,
    name: string
}
```

| Method | Url       |
| ------ | :-------- |
| GET    | /category |
