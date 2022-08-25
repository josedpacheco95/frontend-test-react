import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CategoryContext } from "../../../context/categoryContext";
import styles from "./CategoryList.module.sass"
import { getBaseUrl } from "../../../helpers/urlHelpers";
const url = getBaseUrl();

const CategoryList = () => {
    const { categories, categoryTabId, setCategoryId, setCategory } = useContext(CategoryContext);
    const navigate = useNavigate();
    
    const handleNavigate = (category) => {
        setCategoryId(category.id);
        setCategory(category);
        const urlCategory = category.name === "COMIDA"? "/food" : "/drink";
        navigate(urlCategory)
    }
    return (
        <div className={styles.categoryListContainer}>
            {
            categoryTabId? 
                (categories.filter(category => category.id === categoryTabId)).map(category => (
                    <div 
                        className={styles.categoryItem}
                        style={{backgroundImage: `url(${url}${category.image})`}}
                        onClick={() => handleNavigate(category)}
                    >
                        <span>{category.name}</span>
                    </div>
                ))
                : 
                (
                    <>
                        {categories.map(category => (
                            <div 
                                className={styles.categoryItem}
                                style={{backgroundImage: `url(${url}${category.image})`}}
                                onClick={() => handleNavigate(category)}
                            >
                                <span>{category.name}</span>
                            </div>
                        ))}   
                    </>
                ) 
            }
        </div>
    )
}

export default CategoryList;