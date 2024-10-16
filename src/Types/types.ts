export interface taskType {
  id: string;
  order: number;
  title: string;
  itsDone: boolean;
}

export interface AddNewTaskProps {
  order: number;
  addTask: (newTask: taskType) => void;
}
