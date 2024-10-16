import { useState } from "react";
import AddNewTask from "../AddNewTask/AddNewTask";
import Filters from "../Filters/Filters";

const TasksField = () => {
  const [tasks, setTasks] = useState([]);
  return (
    <div>
      <AddNewTask />
      {tasks.map((task) => (
        <Task />
      ))}
      <Filters />
    </div>
  );
};

export default TasksField;
