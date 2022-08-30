import { useContext, useState  } from "react";
import { MenuContext } from "../../../context/menuContext";
import styles from "./Banner.module.sass";
import { getBaseUrl } from "../../../helpers/urlHelpers"
import { InView } from "react-intersection-observer";
const url = getBaseUrl();

export const Banner = ({ setVisible }) => {
    const [show, setShow ] = useState(true);
    const handleVisible = (visible) => {
        setShow(visible);
        setVisible(visible);
    }
    const { state } = useContext(MenuContext);
    return(
        <InView
            as="div"
            onChange={(view) => handleVisible(view)}
            className={styles.Banner} 
            style={{
                backgroundImage: `url(${url}${state?.menu?.banner})`
            }} 
        >
            { state && state.menu && state.menu.banner? <img style={{visibility: show? "visible" : "hidden"}}src={`${state?.menu?.logo}`} /> : null}
        </InView>
    )
};

export default Banner;