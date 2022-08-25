import { useContext } from "react";
import { MenuContext } from "../../../context/menuContext";
import styles from "./Banner.module.sass";
import { getBaseUrl } from "../../../helpers/urlHelpers"
const url = getBaseUrl();

export const Banner = () => {
    
    const { state } = useContext(MenuContext);
    return(
        <div className={styles.Banner} style={{
            backgroundImage: `url(${url}${state?.menu?.banner})`
        }} >
            { state && state.menu && state.menu.banner? <img src={`${state?.menu?.logo}`} /> : null}
        </div>
    )
};

export default Banner;