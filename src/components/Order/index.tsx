

import IProduct from "@/types/IProduct"
import "./style.css"
import { FaTrash } from "react-icons/fa";

interface IOrderProps {
  onDelete: (id: number) => void;
  item: IProduct;
}

export default function Order({ item, onDelete }: IOrderProps) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt={item.img} />
      <h2>{item.title}</h2>
      <p>{item.price} $</p>
      <FaTrash onClick={() => onDelete(item.id)} className='delete-icon' />
    </div>
  )
}
