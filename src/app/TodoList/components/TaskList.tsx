import React, { Fragment } from "react";
import { TaskComponentProps, TaskType } from "../types";
import Task from "../../../components/Task";

interface TaskListProps extends TaskComponentProps {
  tasks: TaskType[];
  filterCategory: string | undefined;
}

export default function TaskList({
  tasks,
  updateTask,
  deleteTask,
  filterCategory,
}: TaskListProps) {
  const getTasks = () => {
    if (filterCategory !== "All") {
      return tasks.filter(
        (task: TaskType) => task.categoryId === filterCategory
      );
    } else {
      return tasks;
    }
  };

  const DisplayTasks = () =>
    getTasks().map((t: TaskType) => (
      <Fragment key={t.id}>
        <Task task={t} updateTask={updateTask} deleteTask={deleteTask} />
      </Fragment>
    ));

  return (
    <div>{getTasks().length > 0 ? <DisplayTasks /> : "No tasks found"}</div>
  );
}
