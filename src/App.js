import AddNewTaskForm from "./components/AddNewTaskForm/AddNewTaskForm";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <AddNewTaskForm />
      <TodoList />
    </div>
  );
};

export default App;
