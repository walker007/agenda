import { TaskProps } from "../../App";
import { Button } from "../Button";
import { FaTrashAlt, FaCheck } from "react-icons/fa";
import "./style.css";

interface ItemListProps {
  task: TaskProps;
}

export const ItemList: React.FC<ItemListProps> = ({ task:{ titulo, data, status } }) => {
  return (
    <div className="list-item">
      <span className="titulo">{titulo}</span>
      <time className="data">
        {data.toLocaleDateString("pt-br", { dateStyle: "long" })}
      </time>
      <span className="status">{status ? "Concluído" : "A fazer"}</span>
      <div className="acoes">
        {!status && (
          <Button className="success" title="Concluir Tarefa">
            <FaCheck />
          </Button>
        )}
        <Button className="danger" title="Excluir Tarefa">
          <FaTrashAlt />
        </Button>
      </div>
    </div>
  );
};
