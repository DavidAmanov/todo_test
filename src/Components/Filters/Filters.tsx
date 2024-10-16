import FiltersModule from "./Filters.module.css";

const Filters = () => {
  return (
    <div className={FiltersModule.container}>
      <span>number items</span>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
      <button>Clear completed</button>
    </div>
  );
};
export default Filters;
