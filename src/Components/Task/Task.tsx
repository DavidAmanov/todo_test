import TaskModule from "./Task.module.css";
import { taskType } from "../../Types/types";

const Task = ({
  task,
  tasks,
  setTasks,
}: {
  task: taskType;
  tasks: taskType[];
  setTasks: React.Dispatch<React.SetStateAction<taskType[]>>;
}) => {
  const handleIsChecked = () => {
    const recheckedTasks = tasks.map((item) => {
      if (item.id === task.id) {
        return { ...item, itsDone: !task.itsDone };
      }
      return item;
    });
    setTasks(recheckedTasks);
  };
  return (
    <button className={TaskModule.container} onClick={handleIsChecked}>
      <input type="checkbox" checked={task.itsDone}></input>
      <span style={{ textDecoration: task.itsDone ? "line-through" : "none" }}>
        {task.title}
      </span>
    </button>
  );
};
export default Task;
