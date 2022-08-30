import { getProductsFromSubsCategory } from "../../../api/services";
import { useState, useEffect, useCallback} from "react";
import cn from "classnames";
import styles from "./Food.module.sass"
import { getBaseUrl } from "../../../helpers/urlHelpers";
import { ReactComponent as FoodIcon } from "../../../assets/icons/food.svg";

export const Food = ({subcategory}) => {
    const [products, setProducts] = useState([])
    const getProducts = useCallback(async() => {
        const response = await getProductsFromSubsCategory("product/", {categoryId: subcategory.category_id, subCategoryId: subcategory.id})
        setProducts(response);
    }, [subcategory])
    useEffect(() => {
        getProducts().then();
    }, []);
    return (
        <>
        {
            products.map((product, index) => (
                <div key={`index-${index}`} className={cn("row", styles.foodContainer)}>
                    <div style={{borderBottom: (products && (products.length - 1) == index) ? "" : "1px solid gainsboro"}} className={cn("col")}>
                        <span className={styles.title}>{product && product.name? product?.name: null}</span>
                        <span className={styles.description}>{product && product.description? product.description: null}</span>
                        <ul className={styles.allergiesContainer}>
                            {product? product?.allergens.map((allergen) => (
                                <li>
                                    <FoodIcon />
                                </li>
                            )) : null}
                        </ul>
                        <span className={styles.price}>{product && product.price? `${product.price}€` : null}</span>
                    </div>
                    <div style={{borderBottom: (products && (products.length - 1) == index) ? "" : "1px solid gainsboro"}} className={cn("col", styles.avatar)}>
                        {product && product.image? <img src={`${getBaseUrl()}${product.image}`} /> : null}
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Food;