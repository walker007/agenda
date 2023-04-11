import { useState } from "react";
import "./App.css";
import { ItemList } from "./components/ItemList";
import { AddTask } from "./components/AddTask";
import { v4 } from 'uuid';

export interface TaskProps {
  id: string;
  titulo: string;
  data: Date;
  status: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      id: v4(),
      titulo: "task 1",
      data: new Date(),
      status: false,
    },
    {
      id: v4(),
      titulo: "task 2",
      data: new Date(),
      status: true,
    },
  ]);

  const handleAddTask = (task:TaskProps) => {
    setTaskList([task,...taskList]);
  }

  const sortByDate = () => {
    setTaskList(estadoAnterior =>{
      return estadoAnterior.sort((a, b) =>{
        return a.data.getTime() - b.data.getTime();
      })
    })
  }
  
  return (
    <div className="container">
      <h1>Minha agenda</h1>
      <AddTask onAddTask={handleAddTask} />
      <main className="card">
        { taskList.map((task,indice) => {
          return <ItemList task={task} key={task.id} />
        }) }
      </main>
    </div>
  );
}

export default App;
