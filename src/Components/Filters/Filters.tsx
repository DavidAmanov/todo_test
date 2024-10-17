import FiltersModule from "./Filters.module.css";
import { FiltersProps } from "../../Types/types";

const Filters = ({
  handleFilter,
  handleDeleteCompleted,
  tasksLength,
}: FiltersProps) => {
  return (
    <div className={FiltersModule.container}>
      <span>{tasksLength} items left</span>
      <div className={FiltersModule.container__div}>
        <button onClick={() => handleFilter("All")}>All</button>
        <button onClick={() => handleFilter("Active")}>Active</button>
        <button onClick={() => handleFilter("Completed")}>Completed</button>
      </div>
      <button onClick={handleDeleteCompleted}>Clear completed</button>
    </div>
  );
};
export default Filters;
