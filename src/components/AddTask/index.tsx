import { Button } from "../Button";
import "./style.css";

export const AddTask: React.FC = () => {
  return (
    <div className="addTask-container">
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input type="text" id="titulo" />
      </div>
      <div className="form-group">
        <label htmlFor="data">Data</label>
        <input id="data" type="date" />
      </div>
      <div className="form-group">
        <Button className="success">Salvar</Button>
      </div>
    </div>
  );
};
