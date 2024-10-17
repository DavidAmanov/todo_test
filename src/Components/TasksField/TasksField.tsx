import { useState } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import Filters from "../Filters/Filters";
import { taskType } from "../../Types/types";
import Task from "../Task/Task";
import TasksFieldModule from "./TasksField.module.css";
import { useDragAndDrop } from "../../Hooks/useDragAndDrop";

const TasksField = () => {
  const [tasks, setTasks] = useState<taskType[]>([]);
  const [filter, setFilter] = useState<string>("All");
  const [showTasks, setShowTasks] = useState<boolean>(true);

  const addTask = (newTask: taskType) => {
    setTasks([...tasks, newTask]);
  };

  const {
    handleDragStart,
    handleDragEnter,
    handleDragEnd,
    handleDragOver,
    handleDragLeave,
  } = useDragAndDrop(tasks, setTasks);

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const handleDeleteCompleted = () => {
    const temp = tasks.filter((task) => task.itsDone !== true);
    setTasks(temp);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Active") return !task.itsDone;
    if (filter === "Completed") return task.itsDone;
  });

  const numberItems =
    tasks.length - tasks.filter((task) => task.itsDone === true).length;

  return (
    <div className={TasksFieldModule.field}>
      <AddNewTask
        addTask={addTask}
        order={tasks.length}
        showTasks={showTasks}
        setShowTasks={setShowTasks}
      />
      {showTasks &&
        filteredTasks.map((task) => (
          <div
            key={task.id}
            draggable
            onDragStart={() => handleDragStart(task)}
            onDragEnter={(event) => handleDragEnter(event, task)}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            onDragLeave={handleDragLeave}
          >
            <Task task={task} tasks={tasks} setTasks={setTasks} />
          </div>
        ))}
      <Filters
        tasksLength={numberItems}
        handleFilter={handleFilter}
        handleDeleteCompleted={handleDeleteCompleted}
      />
    </div>
  );
};

export default TasksField;
