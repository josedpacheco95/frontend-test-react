import React, { useState } from "react";
import Banner from "./Banner";
import Tab from "./Tab"
import CategoryList from "./CategoryList";
import { motion } from "framer-motion";
import FooterContainer from "../../containers/Footer";
import styles from "./Home.module.sass"
const Home = () => {
    const [visible, setVisible] = useState(false);
    return(
        <motion.div
            className={styles.Home}
            initial={{
                width: window.innerWidth,
                opacity: 0.3
            }}
            animate={{ 
                width: "100%",
                opacity: 1
            }}
            exit={{
                width: 0,
                opacity: 0.3,
                transition: {
                    duration: 0.6,
                    delay: 0
                }

            }}
        >
            <Banner setVisible={setVisible}/>
            <Tab visible={visible}>
                <CategoryList />
                <FooterContainer />
            </Tab>
        </motion.div>
    )
}

export default Home;