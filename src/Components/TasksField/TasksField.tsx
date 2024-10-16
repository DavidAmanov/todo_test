import { useEffect, useState } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import Filters from "../Filters/Filters";
import { taskType } from "../../Types/types";
import Task from "../Task/Task";
import TasksFieldModule from "./TasksField.module.css";
import { useDragAndDrop } from "../../Hooks/useDragAndDrop";

const TasksField = () => {
  const [tasks, setTasks] = useState<taskType[]>([]);

  const addTask = (newTask: taskType) => {
    setTasks([...tasks, newTask]);
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
  const { handleDragStart, handleDragEnter, handleDragEnd, handleDragOver } =
    useDragAndDrop(tasks, setTasks);

  return (
    <div className={TasksFieldModule.field}>
      <AddNewTask addTask={addTask} order={tasks.length} />
      {tasks.map((task) => (
        <div
          key={task.id}
          draggable
          onDragStart={() => handleDragStart(task)}
          onDragEnter={() => handleDragEnter(task)}
          onDragOver={handleDragOver}
          onDragEnd={handleDragEnd}
        >
          <Task task={task} />
        </div>
      ))}
      <Filters />
    </div>
  );
};

export default TasksField;
