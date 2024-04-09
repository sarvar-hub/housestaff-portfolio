

import IProduct from "@/types/IProduct"
import "./style.css"

interface IShowFullProductProps {
  onShowProduct: (product: IProduct) => void;
  onAdd: (product: IProduct) => void;
  product: IProduct;
}

export default function ShowFullProduct({ product, onAdd, onShowProduct }: IShowFullProductProps) {
  return (
    <div className="full-item">
      <div>
        <img src={"./img/" + product.img} onClick={() => onShowProduct(product)} />
        <h2>{product.title}</h2>
        <p>{product.desc}</p>
        <b>{product.price}$</b>
        <div onClick={() => onAdd(product)} className="add-to-cart">+</div>
      </div>
    </div>
  )
}
