import TaskModule from "./Task.module.css";

const Task = ({task}) => {
  return (
    <div className={TaskModule.container}>
      <input type="checkbox"></input>
      <span>{task.}</span>
    </div>
  );
};
export default Task;
