import Header from "./component/Header";
import Tasks from "./component/Tasks";
import AddTask from "./component/AddTask";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at school",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
  ]);
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
    const id = Math.floor(Math.random() * 10000 +1);
    const newTask = {id,...task}
    setTask([...tasks,newTask])
  }
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No task to show"
      )}
    </div>
  );
}

export default App;
