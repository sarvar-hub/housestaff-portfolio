import IProduct from "@/types/IProduct";
import Item from "@/components/Item";
import "./style.css"


interface IItemsProps {
  onShowProduct: (product: IProduct) => void;
  onAdd: (item: IProduct) => void;
  products: IProduct[];
}


export default function Items({ products, onAdd, onShowProduct }: IItemsProps) {
  return (<>
    <main>
      {products.map(el => (
        <Item key={el.id} product={el} onAdd={onAdd} onShowProduct={onShowProduct} />
      ))}
    </main>
  </>)
}
