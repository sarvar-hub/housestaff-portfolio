import "./style.css"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import products from "@/constants/products"
import Items from "@/components/Items"
import { useState } from "react"
import IProduct from "@/types/IProduct"
import Categories from "@/components/Categories"
import ShowFullProduct from "@/components/ShowFullProduct"

export default function App() {
  const [orders, setOrders] = useState<IProduct[]>([]);
  const [currentProducts, setCurrentProducts] = useState<IProduct[]>(products);
  const [showFullProduct, setShowFullProduct] = useState<boolean>(false);
  const [fullProduct, setFullProduct] = useState<IProduct | null>(null);
  const [pickedCategory, setPickedCategory] = useState<string>('all');

  const onShowProduct = (product: IProduct) => {
    setFullProduct(product);
    setShowFullProduct(prev => !prev);
  }

  const chooseCategory = (category: string) => {
    setPickedCategory(category);

    if (category === 'all') {
      setCurrentProducts(products);
      return
    }
    setCurrentProducts(products.filter(el => el.category === category))
  }

  const addToOrder = (item: IProduct) => {
    let isInArray = false;
    orders.map(el => {
      if (el.id === item.id)
        isInArray = true
    })
    if (!isInArray)
      setOrders(prevOrders => [...prevOrders, item]);
  }

  const deleteOrder = (id: number) => {
    setOrders(prevOrders => prevOrders.filter(el => el.id !== id));
  }

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories pickedCategory={pickedCategory} chooseCategory={chooseCategory} />
      <Items onShowProduct={onShowProduct} products={currentProducts} onAdd={addToOrder} />

      {(showFullProduct && fullProduct) && <ShowFullProduct onAdd={addToOrder} onShowProduct={onShowProduct} product={fullProduct} />}
      <Footer />
    </div>
  )
}
