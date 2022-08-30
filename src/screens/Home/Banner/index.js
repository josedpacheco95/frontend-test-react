import { useContext, useRef, useEffect, useState  } from "react";
import { MenuContext } from "../../../context/menuContext";
import styles from "./Banner.module.sass";
import { getBaseUrl } from "../../../helpers/urlHelpers"
import { debounce } from "underscore";
const url = getBaseUrl();

export const Banner = ({ setVisible }) => {
    const BannerRef = useRef(null);
    const [show, setShow ] = useState(true);
    const options = {
        root: null,
        rootMargin: "0px",
        threeshold: 1.0,
        trackVisibility: true,
        delay: 100              
    }
    const handleVisible = (visible) => {
        setShow(visible);
        setVisible(visible);
    }
    const callbackFunction = (entries) => {
        if (!Array.isArray(entries) || entries.length == 0) return null
        const isVisible = entries[0].isVisible;
        console.log(entries);
        // debounce(handleVisible(isVisible), 1000);
    }
    const { state } = useContext(MenuContext);

    useEffect(() => {
        const observer = new IntersectionObserver(callbackFunction, options);
        if (BannerRef.current) observer.observe(BannerRef.current);
        return () => {
            if(BannerRef.current) observer.unobserve(BannerRef.current);
        }
    }, [BannerRef, options])
    return(
        <div 
            ref={BannerRef} 
            className={styles.Banner} 
            style={{
                backgroundImage: `url(${url}${state?.menu?.banner})`
            }} 
        >
            { state && state.menu && state.menu.banner? <img style={{visibility: show? "visible" : "hidden"}}src={`${state?.menu?.logo}`} /> : null}
        </div>
    )
};

export default Banner;