import { useContext } from "react";
import styles from "./Tab.module.sass";
import cn from "classnames";
import { CategoryContext } from "../../../context/categoryContext";
import { MenuContext } from "../../../context/menuContext";

export const Tab = () => {
    const { categories, categoryTabId, setCategoryTabId } = useContext(CategoryContext);
    const { state } = useContext(MenuContext)   

    const handleTab = category => {
        if (categoryTabId && categoryTabId === category.id) {
            setCategoryTabId(null)
            return;
        } else setCategoryTabId(category.id);
    };

    return (
        <div className={styles.tabContainer}>
            <span>{state && state.menu && state.menu.name? state.menu.name: ""}</span>
            <div className={styles.subTabContainer}>
                {
                    categories.map(category => (
                        <span 
                            className={cn({
                                [styles.active]: category.id === categoryTabId
                            })}
                            onClick={() => {
                            handleTab(category);
                        }}>{category.name}</span>
                    ))
                }
            </div>
        </div>
    )
};

export default Tab;