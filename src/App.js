import AddNewTaskForm from "./components/AddNewTaskForm";
import TodoList from "./components/TodoList";
import styles from "./App.module.css";

const App = () => {
  return (
    <div className={styles.App}>
      <AddNewTaskForm className={styles.AddNewTaskForm} />
      <TodoList className={styles.TodoList} />
    </div>
  );
};

export default App;
