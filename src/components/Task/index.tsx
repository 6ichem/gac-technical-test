import React, { useState } from "react";
import { TaskComponentProps, TaskType } from "../../app/TodoList/types";
import styles from "./Task.module.scss";

interface TaskProps extends TaskComponentProps {
  task: TaskType;
}

export default function Task({ task, updateTask, deleteTask }: TaskProps) {
  const [currentTask, setCurrentTask] = useState<TaskType>(task);

  const completeTask = (value: boolean) => {
    const newTask = {
      ...currentTask,
      completed: value,
    };

    setCurrentTask(newTask);

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
        />
        <h1>
          {currentTask.name} ({currentTask.category})
        </h1>
      </div>
      <div>
        <button onClick={() => deleteTask(currentTask)}>Delete</button>
      </div>
    </div>
  );
}
