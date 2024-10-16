import arrow from "../../Assets/icons/arrow-down-svgrepo-com.svg";
import AddNewTaskModule from "./AddNewTask.module.css";
import { AddNewTaskProps, taskType } from "../../Types/types";

import { v4 as uuidv4 } from "uuid";

const AddNewTask: React.FC<AddNewTaskProps> = ({ addTask, order }) => {
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
  return (
    <div className={AddNewTaskModule.container}>
      <button className={AddNewTaskModule.container__btn}>
        <img src={arrow} alt="arrow" />
      </button>
      <input onKeyDown={handleAdd}></input>
    </div>
  );
};
export default AddNewTask;
