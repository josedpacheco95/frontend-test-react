import styles from "./Drink.module.sass"
import { getProductsFromSubsCategory } from "../../../api/services";
import { useState, useEffect, useCallback} from "react";
import cn from "classnames";
import { getBaseUrl } from "../../../helpers/urlHelpers";
import { ReactComponent as Plus } from "../../../assets/icons/add.svg";
import { ReactComponent as FoodIcon } from "../../../assets/icons/food.svg";

export const Drink = ({subcategory}) => {
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
                <div key={`index-${index}`} className={cn("row", styles.drinkContainer)}>
                    <div style={{borderBottom: products.length == (index - 1)? "":"1px solid gainsboro"}} className={cn("col")}>
                        <span className={styles.title}>{product && product.name? product?.name: null}</span>
                        <ul className={styles.allergiesContainer}>
                            {product? product?.allergens.map((allergen) => (
                                <li>
                                    <FoodIcon />
                                </li>
                            )) : null}
                        </ul>
                        <ul className={styles.variantsContainer}>
                            {
                                product? product?.variants.map(variant => (
                                    <li>{`${variant.name} / ${variant.price}`}</li>
                                )) : null
                            }
                        </ul>
                        <span className={styles.price}>{product && product.price? `${product.price}€` : null}</span>
                    </div>
                    <div style={{borderBottom: products.length == (index - 1)? "":"1px solid gainsboro"}} className={cn("col", styles.avatar)}>
                        <Plus />
                        {product && product.image? <img src={`${getBaseUrl()}${product.image}`} /> : null}
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default Drink;