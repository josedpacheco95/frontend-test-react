import { useContext } from "react";
import { CategoryContext } from "../../../context/categoryContext";
import styles from "./Banner.module.sass";
import { getBaseUrl } from "../../../helpers/urlHelpers"
const url = getBaseUrl();

export const Banner = () => {
    
    const { category } = useContext(CategoryContext);

    return(
        <div className={styles.Banner} style={{
            backgroundImage: `url(${url}${category?.image})`
        }} >
        </div>
    )
};

export default Banner;