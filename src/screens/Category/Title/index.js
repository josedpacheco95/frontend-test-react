import { useState, useContext } from "react";
import { CategoryContext } from "../../../context/categoryContext";
import styles from "./Title.module.sass"
import { ReactComponent as X } from "../../../assets/icons/x.svg";
import { ReactComponent as Food } from "../../../assets/icons/food.svg";

const alergiesDummyData = [
    "Altramuces", "Apio", "Cacahuete", 
    "Crustaceos", "Gluten", "Huevo", "Lacteos", 
    "Mostaza", "Pescado", "Sesamos", "Soja",
];

export const Title = () => {
    
    const { category } = useContext(CategoryContext);
    const [show, setShow] = useState(false);
    const Alergies = () => {
        return (
            <div className={styles.alergiesContainer}>
                <div className={styles.titleContainer}>
                    <span className={styles.title}>Alergenos</span>
                    <span 
                        onClick={() => setShow(false)}
                        className={styles.btnClose}
                    >
                        <X />
                    </span>
                </div>
                <ul className={styles.alergies}>
                    {
                        alergiesDummyData.map(alergy => (
                            <li>
                                <Food/>
                                <span>{alergy}</span>
                            </li>
                        ))
                    }
                    
                </ul>
            </div>
        )
    }
    
    return(
        <div className={styles.Title}>
            <span className={styles.categoryTitle}>{category? category.name: ""}</span>
            {
                !show?
                (
                    <span onClick={() => setShow(true)} className={styles.alergiaBtn}>{"Mostrar Alergenos"}</span>
                )
                :
                (
                    <Alergies />
                )
            }
        </div>
    )
};

export default Title;