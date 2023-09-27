import React, { useEffect, useState } from "react";
import { Category, TaskType } from "./types";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { instance } from "../../http/config";
import FilterCategory from "./components/FilterCategory";

export default function TodoList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const getTasks = async () => {
    setLoading(true);

    try {
      const { data } = await instance.get("/task");

      setTasks(data);

      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.error("[*] getTasks Error:", e);
    }
  };

  const addTask = async (task: TaskType) => {
    try {
      const { data } = await instance.post("/task", task);
      const newTasks = [...tasks, data];

      setTasks(newTasks);
    } catch (e) {
      console.error("[*] addTask Error:", e);
    }
  };

  const updateTask = async (newTask: TaskType) => {
    try {
      const { data } = await instance.put(`/task/${newTask.id}`, newTask);

      const updatedTasks = tasks.map((oldTask: TaskType) =>
        oldTask.id == newTask.id ? newTask : oldTask
      );

      setTasks(updatedTasks);
    } catch (e) {
      console.error("[*] addTask Error:", e);
    }
  };

  const deleteTask = async (task: TaskType) => {
    try {
      const newTasks = tasks.filter((t: TaskType) => t.id !== task.id);

      const { data } = await instance.delete(`/task/${task.id}`);

      setTasks(newTasks);
    } catch (e) {
      console.error("[*] addTask Error:", e);
    }
  };

  useEffect(() => {
    getTasks();
    getCategories();
  }, []);

  // optional task: add a dropdown to select category for each todo
  const [categories, setCategories] = useState<Category[]>();

  const getCategories = async () => {
    try {
      const { data } = await instance.get("/category");

      setCategories(data);
    } catch (e) {
      console.error("[*] getCategories Error:", e);
    }
  };

  return (
    <div>
      <TaskForm addTask={addTask} />
      <FilterCategory
        categories={categories}
        setFilterCategory={setFilterCategory}
      />
      {isLoading ? (
        "Loading"
      ) : (
        <TaskList
          categories={categories}
          tasks={tasks}
          updateTask={updateTask}
          deleteTask={deleteTask}
          filterCategory={filterCategory}
        />
      )}
    </div>
  );
}
