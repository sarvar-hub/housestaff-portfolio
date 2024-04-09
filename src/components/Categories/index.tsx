import "./style.css"
import categories from "@/constants/categories"

interface ICategoriesProps {
  pickedCategory: string;
  chooseCategory: (category: string) => void;
}

export default function Categories({pickedCategory, chooseCategory}: ICategoriesProps) {
  
  return (
    <div className="categories">
      {categories.map(el => (
        <div className={el.key===pickedCategory ? "active": ""} key={el.key} onClick={()=> chooseCategory(el.key)}>{el.name}</div>
      ))} 
    </div>
  )
}
