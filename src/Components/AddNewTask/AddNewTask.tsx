import arrow from "../../Assets/icons/arrow-down-svgrepo-com.svg";
import AddNewTaskModule from "./AddNewTask.module.css";
import { AddNewTaskProps, taskType } from "../../Types/types";

import { v4 as uuidv4 } from "uuid";

const AddNewTask: React.FC<AddNewTaskProps> = ({
  addTask,
  order,
  showTasks,
  setShowTasks,
}) => {
  const handleAdd = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const newTask: taskType = {
        id: uuidv4(),
        order: order + 1,
        title: event.currentTarget.value,
        itsDone: false,
      };
      addTask(newTask);
      event.currentTarget.value = "";
    }
  };

  const handleShowTasks = () => {
    setShowTasks(!showTasks);
  };

  return (
    <div className={AddNewTaskModule.container}>
      <button
        className={AddNewTaskModule.container__btn}
        onClick={handleShowTasks}
      >
        <img
          src={arrow}
          alt="arrow"
          style={{ rotate: !showTasks ? "270deg" : "0deg" }}
        />
      </button>
      <input onKeyDown={handleAdd} placeholder="Add new task"></input>
    </div>
  );
};
export default AddNewTask;
