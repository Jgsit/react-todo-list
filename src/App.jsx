import { useState } from "react";
import "./App.scss";
import Header from "./assets/components/Header";
import Footer from "./assets/components/Footer";
import Task from "./assets/components/Task";

function App() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = () => {
    const newTasks = [...tasks];
    newTasks.push({ text: newTask, done: false });
    setTasks(newTasks);
    setNewTask("");
  };
  const handleTaskStatus = (event) => {
    const index = event.target.id;
    const newTasks = [...tasks];
    newTasks[index].done = !newTasks[index].done;
    setTasks(newTasks);
  };
  const handleTaskDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    console.log(newTasks);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <Header title="Todo List" />
      <main>
        <section className="tasks">
          {tasks.map((task, index) => {
            return (
              <Task
                key={index}
                index={index}
                text={task.text}
                done={task.done}
                handleTaskStatus={handleTaskStatus}
                handleTaskDelete={handleTaskDelete}
              />
            );
          })}
        </section>
        <section className="addTask">
          <input
            type="text"
            placeholder="new task"
            onChange={handleChange}
            value={newTask}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleSubmit();
              }
            }}
          />
          <button onClick={handleSubmit}>Add Task</button>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
