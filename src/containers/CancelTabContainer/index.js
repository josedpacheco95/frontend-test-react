import { Link } from "react-router-dom";
import { ReactComponent as X } from "../../assets/icons/x.svg" 
import styles from "./CancelTab.module.sass"
const CancelTabContainer = () => {
    return (
        <div className={styles.cancelTabContainer}>
            <Link to="/">
                <X/>
            </Link>
        </div>
    )
}

export default CancelTabContainer;