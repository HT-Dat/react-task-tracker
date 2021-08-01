import Header from "./component/Header";
import Tasks from "./component/Tasks";
import { useState } from "react";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },{
        id: 2,
        text: "Meeting at school",
        day: "Feb 6th at 1:30pm",
        reminder: true,
      },
  ]);
  const deleteTask = (id) => {
    setTask(tasks.filter(tasks => tasks.id !== id))
  }
  return (
    <div className="container">
      <Header />
      {tasks.length>0? (<Tasks tasks={tasks} onDelete={deleteTask}/>) : 'No task to show'}
    </div>
  );
}

export default App;
