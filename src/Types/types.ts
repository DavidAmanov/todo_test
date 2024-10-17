export interface taskType {
  id: string;
  order: number;
  title: string;
  itsDone: boolean;
}

export interface AddNewTaskProps {
  setShowTasks: React.Dispatch<React.SetStateAction<boolean>>;
  showTasks: boolean;
  order: number;
  addTask: (newTask: taskType) => void;
}

export interface taskProp {
  task: taskType;
  tasks: taskType[];
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>;
}

export interface FiltersProps {
  tasksLength: number;
  handleFilter: (filter: string) => void;
  handleDeleteCompleted: () => void;
}
