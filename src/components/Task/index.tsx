import React, { useState } from "react";
import {
  Category,
  TaskComponentProps,
  TaskType,
} from "../../app/TodoList/types";
import styles from "./Task.module.scss";

interface TaskProps extends TaskComponentProps {
  task: TaskType;
  categories: Category[] | undefined;
}

export default function Task({
  task,
  updateTask,
  deleteTask,
  categories,
}: TaskProps) {
  const [currentTask, setCurrentTask] = useState<TaskType>(task);

  const updateCurrentTask = (payload: TaskType) => {
    setCurrentTask(payload);

    updateTask(payload);
  };

  const completeTask = (value: boolean) => {
    const newTask = {
      ...currentTask,
      completed: value,
    };

    updateTask(newTask);
  };

  const changeCategory = (value: string) => {
    const newTask = {
      ...currentTask,
      categoryId: value,
    };

    updateTask(newTask);
  };

  return (
    <div
      className={`${styles.Task} ${
        currentTask.completed ? styles.completed : ""
      }`}
      key={currentTask.id}
    >
      <div className={styles.Task__inner}>
        <input
          type="checkbox"
          checked={currentTask.completed}
          onChange={(e) => completeTask(e.target.checked)}
        />{" "}
        <h1>
          {currentTask.name} ({currentTask.category})
        </h1>
      </div>
      <div>
        <select
          name="categories"
          id="categories"
          onChange={(e) => changeCategory(e.target.value)}
          value={currentTask.categoryId || "None"}
        >
          {categories?.map((i: Category) => (
            <option value={i.id} key={i.id}>
              {i.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={() => deleteTask(currentTask)}>Delete</button>
      </div>
    </div>
  );
}
