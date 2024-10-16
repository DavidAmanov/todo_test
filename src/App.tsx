import AppModule from "./App.module.css";
import TasksField from "./Components/TasksField/TasksField";

function App() {
  return (
    <div className={AppModule.app}>
      <h1 className={AppModule.title}>todos</h1>
      <TasksField />
    </div>
  );
}

export default App;
