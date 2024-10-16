import TaskModule from "./Task.module.css";
import { taskType } from "../../Types/types";

const Task = ({ task }: { task: taskType }) => {
  return (
    <button className={TaskModule.container}>
      <input type="checkbox" checked={task.itsDone}></input>
      <span style={{ textDecoration: task.itsDone ? "line-through" : "none" }}>
        {task.title}
      </span>
    </button>
  );
};
export default Task;
