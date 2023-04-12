import { useState, useEffect } from "react";
import "./App.css";
import { ItemList } from "./components/ItemList";
import { AddTask } from "./components/AddTask";
import { v4 } from "uuid";
import { Button } from "./components/Button";

export interface TaskProps {
  id: string;
  titulo: string;
  data: Date;
  status: boolean;
}

function App() {
  const [taskList, setTaskList] = useState<TaskProps[]>(
    JSON.parse(window.localStorage.getItem("tasklist-db") || "[]")
  );

  useEffect(() => {
    const valueDB = JSON.stringify(taskList);
    window.localStorage.setItem("tasklist-db", valueDB);
  }, [taskList]);

  const handleAddTask = (task: TaskProps) => {
    setTaskList([task, ...taskList]);
  };

  const getTaskItem = (id: string) => {
    return taskList.find((taskItem) => {
      return taskItem.id === id;
    });
  };

  const handleDelete = (id: string) => {
    const task = getTaskItem(id);

    if (!task) return;

    const index = taskList.indexOf(task);
    taskList.splice(index, 1);

    setTaskList([...taskList]);
  };

  const handleDone = (id: string) => {
    const task = getTaskItem(id);

    if (!task) return;

    const index = taskList.indexOf(task);

    taskList[index].status = true;

    setTaskList([...taskList]);
  };

  const sortByDate = () => {
    setTaskList((estadoAnterior) => {
      const copiaLista = [...estadoAnterior];

      return copiaLista.sort((a, b) => {
        return new Date(a.data).getTime() - new Date(b.data).getTime();
      });
    });
  };

  return (
    <div className="container">
      <h1>Minha agenda</h1>
      <AddTask onAddTask={handleAddTask} />
      {taskList.length > 0 && (
        <main className="card">
          <Button onClick={sortByDate}>Ordenar por Data</Button>
          {taskList.map((task, indice) => {
            return (
              <ItemList
                onDelete={handleDelete}
                onDone={handleDone}
                task={task}
                key={task.id}
              />
            );
          })}
        </main>
      )}
    </div>
  );
}

export default App;
