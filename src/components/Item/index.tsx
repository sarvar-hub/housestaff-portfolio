import IProduct from "@/types/IProduct"
import "./style.css"

interface IItemProps {
  onShowProduct: (product: IProduct) => void;
  onAdd: (item: IProduct) => void;
  product: IProduct;
}

export default function Item({ product, onAdd, onShowProduct }: IItemProps) {
  return (<div className="item">
    <img src={"./img/" + product.img} onClick={() => onShowProduct(product)} />
    <h2>{product.title}</h2>
    <p>{product.desc}</p>
    <b>{product.price}$</b>
    <div onClick={()=> onAdd(product)} className="add-to-cart">+</div>

  </div>)
}
