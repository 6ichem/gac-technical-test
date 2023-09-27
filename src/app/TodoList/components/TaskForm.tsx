import React, { useState } from "react";
import { TaskType } from "../types";
import styles from "../ToDoList.module.scss";

interface TaskProps {
  addTask: (t: TaskType) => void;
}

export default function TaskForm({ addTask }: TaskProps) {
  const [task, setTask] = useState<TaskType>({
    name: "",
    completed: false,
    categoryId: null,
  });

  const setSingleTask = (value: string) => {
    if (value && value.length > 0)
      setTask((prev) => ({
        ...prev,
        name: value,
      }));
  };

  return (
    <div className={styles.TaskForm}>
      <input type="text" onChange={(e) => setSingleTask(e.target.value)} />
      <button onClick={() => addTask(task)}>Add task</button>
    </div>
  );
}
