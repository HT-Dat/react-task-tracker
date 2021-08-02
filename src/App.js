import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import { useState } from "react";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTask] = useState([]);
  const deleteTask = (id) => {
    setTask(tasks.filter((tasks) => tasks.id !== id));
  };
  const toggleReminder = (id) => {
    setTask(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000 + 1);
    const newTask = { id, ...task };
    setTask([...tasks, newTask]);
  };
  return (
    <div className="container">
      <Header onAdd={()=>setShowAddTask(!showAddTask)} showAddTask={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask} /> : ""}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
