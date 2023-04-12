import { TaskProps } from "../../App";
import { Button } from "../Button";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import "./style.css";

interface ItemListProps {
  task: TaskProps;
  onDelete: (id: string) => void;
  onDone: (id: string) => void;
}

export const ItemList: React.FC<ItemListProps> = ({
  task: { titulo, data, status, id },
  onDelete,
  onDone,
}) => {
  const taskData = new Date(data).getTime();
  const todayDate = new Date();

  const today = new Date(
    todayDate.getFullYear(),
    todayDate.getMonth(),
    todayDate.getDate()
  ).getTime();

  return (
    <div
      className="list-item"
      style={{
        color:
         status ? "green" : (taskData < today ? "red" : (taskData == today ? "orange" : "black")),
      }}
    >
      <span className="titulo">{titulo}</span>
      <time className="data">
        {new Date(data).toLocaleDateString("pt-br", { dateStyle: "long" })}
      </time>
      <span className="status">{status ? "Concluído" : "A fazer"}</span>
      <div className="acoes">
        {!status && (
          <Button
            className="success"
            title="Concluir Tarefa"
            onClick={() => onDone(id)}
          >
            <FaCheck />
          </Button>
        )}
        <Button
          className="danger"
          onClick={() => onDelete(id)}
          title="Excluir Tarefa"
        >
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
};
