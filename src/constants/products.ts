import IProduct from "@/types/IProduct";

const products: IProduct[] = [
  {
    id: 1,
    title: 'Стул серый',
    img: 'chair-grey.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'chairs',
    price: '49.99'
  },
  {
    id: 2,
    title: 'Стол',
    img: 'table.webp',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'tables',
    price: '149.00'
  },
  {
    id: 3,
    title: 'Диван',
    img: 'sofa.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'sofa',
    price: '149.00'
  },
  {
    id: 4,
    title: 'Лампа',
    img: 'wall-light.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'light',
    price: '149.00'
  },
  {
    id: 5,
    title: 'Стул белый',
    img: 'chair-white.jpeg',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    category: 'chairs',
    price: '149.00'
  }
]

export default products;
