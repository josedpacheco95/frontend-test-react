import { useContext, useState, useEffect } from "react";
import { CategoryContext } from "../../../context/categoryContext";
import styles from "./SubCategory.module.sass";
import { getBaseUrl } from "../../../helpers/urlHelpers";
import Food from "../FoodProductItems";
import Drink from "../DrinkProductItems";

export const SubCategoryList = () => {
    const { category } = useContext(CategoryContext);
    const [openSubs, setOpenSubs] = useState([]);

    const handleSubcategory = (subcategory) => {
        if (openSubs.filter(opensub => opensub === subcategory.id).length > 0) {
            setOpenSubs(openSubs.filter(opensub => opensub !== subcategory.id));
        } else {
            setOpenSubs((prevState) => ([...prevState, subcategory.id]))
        }
    }
    return (
        <div className={styles.subCategory}>
            {
                category? category.subcategories.map((subcategory) => (
                    <>
                        <div 
                            className={styles.subCategoryItem}
                            style={{
                                backgroundImage: `url(${getBaseUrl()}${subcategory.image})`
                            }}
                            onClick={() => {handleSubcategory(subcategory)}} 
                        >
                            <span
                                className={styles.title}
                            >
                                {subcategory.name}
                            </span>
                        </div>
                        {openSubs.indexOf(subcategory.id) > -1 ? category.name === "COMIDA"? <Food subcategory={subcategory} /> : <Drink subcategory={subcategory}/> : null}
                    </>
                ))
                : null
            }
        </div>
    )
}

export default SubCategoryList;