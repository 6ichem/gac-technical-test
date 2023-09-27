export interface TaskType {
  id?: string;
  name: string;
  completed: boolean;
  categoryId: string | null;
  category?: string;
}

export interface TaskComponentProps {
  updateTask: (task: TaskType) => void;
  deleteTask: (task: TaskType) => void;
}

export interface Category {
  id: string;
  name: string;
}
