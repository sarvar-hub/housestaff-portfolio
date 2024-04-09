import { useState } from "react"
import "./style.css"
import { FaShoppingCart } from "react-icons/fa"
import IProduct from "@/types/IProduct";
import Order from "@/components/Order";

interface IHeaderProps {
  onDelete: (id: number) => void;
  orders: IProduct[];
}

const showOrders = (orders: IProduct[], onDelete: (id: number) => void) => {
  let summa = 0;
  orders.forEach(el => summa += Number.parseFloat(el.price))

  return (<>
    {orders.map(el => (
      <Order key={el.id} item={el} onDelete={onDelete} />
    ))}
    <p className="summa">Сумма: {new Intl.NumberFormat().format(summa)}$ </p>
  </>)
}

const showNothing = () => {
  return <div className="empty">
    <h2>Товаров нет</h2>
  </div>
}

export default function Header({orders, onDelete}: IHeaderProps) {
  const [cartOpen, setCartOpen] = useState<boolean>(false);

  return (
    <header>
      <div>
        <span className="logo">House Staff</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingCart onClick={() => setCartOpen(cartOpen => !cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className="shop-cart">
            {orders.length > 0 ? (
              showOrders(orders, onDelete) 
            ): (
              showNothing()
            )}
          </div>
        )}
      </div>
      <div className="presentation"></div>
    </header>
  )
}
