import { useContext, useState } from "react";
import { CategoryContext } from "../../../context/categoryContext";
import styles from "./SubCategory.module.sass";
import { getBaseUrl } from "../../../helpers/urlHelpers";
import Food from "../FoodProductItems";
import Drink from "../DrinkProductItems";
import { motion } from "framer-motion";

export const SubCategoryList = () => {
    const { category } = useContext(CategoryContext);
    const [openSubs, setOpenSubs] = useState([]);
    const showMenu = {
        enter: {
          opacity: 1,
          y: 0,
          display: "block",
        },
        exit: {
          y: -5,
          opacity: 0,
          transition: {
            duration: 0.3,
          },
          transitionEnd: {
            display: "none",
          },
        },
      };

      const subMenuAnimate = {
        enter: {
          opacity: 1,
          rotateX: 0,
          transition: {
            duration: 0.5
          },
          display: "block"
        },
        exit: {
          opacity: 0,
          rotateX: -15,
          transition: {
            duration: 0.5,
            delay: 0.3
          },
          transitionEnd: {
            display: "none"
          }
        }
      };
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
                        <motion.div
                            variants={subMenuAnimate}
                            initial="exit"
                            animate={openSubs.indexOf(subcategory.id) > -1 ? "enter" : "exit"}
                        >
                        {openSubs.indexOf(subcategory.id) > -1 ? category.name === "COMIDA"? <Food subcategory={subcategory} /> : <Drink subcategory={subcategory}/> : null}
                        </motion.div>
                    </>
                ))
                : null
            }
        </div>
    )
}

export default SubCategoryList;