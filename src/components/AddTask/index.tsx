import { Button } from "../Button";
import { useState } from "react";
import { TaskProps } from "../../App";
import { v4 } from 'uuid';

import "./style.css";

interface AddTaskProps {
  onAddTask: (task: TaskProps) => void;
}

export const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [titulo, setTitulo] = useState<string>("");
  const [data, setData] = useState<string>("");

  const handleClick = () => {
    const dataSplitted = data.split("-");

    const task: TaskProps = {
      id: v4(),
      status: false,
      titulo: titulo,
      data: new Date( Number(dataSplitted[0]), Number(dataSplitted[1]) - 1, Number(dataSplitted[2])),
    };

    onAddTask(task);
    setData("");
    setTitulo("");
  };

  return (
    <div className="addTask-container">
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          id="titulo"
          value={titulo}
          onChange={(evento) => setTitulo(evento.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="data">Data</label>
        <input
          id="data"
          type="date"
          value={data}
          onChange={(evento) => setData(evento.target.value)}
        />
      </div>
      <div className="form-group">
        <Button className="success" onClick={handleClick}>Salvar</Button>
      </div>
    </div>
  );
};
