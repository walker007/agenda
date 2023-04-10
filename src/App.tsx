import { useState } from "react";
import "./App.css";
import { ItemList } from "./components/ItemList";
import { AddTask } from "./components/AddTask";

export interface TaskProps {
  titulo: string;
  data: Date;
  status: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>([
    {
      titulo: "task 1",
      data: new Date(),
      status: false,
    },
    {
      titulo: "task 2",
      data: new Date(),
      status: true,
    },
  ]);

  return (
    <div className="container">
      <h1>Minha agenda</h1>
      <AddTask />
      <main className="card">
        { taskList.map((task,indice) => {
          return <ItemList data={task.data} status={task.status} titulo={task.titulo} key={indice} />
        }) }
      </main>
    </div>
  );
}

export default App;
