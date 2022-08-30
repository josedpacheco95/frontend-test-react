import {
    Routes,
    Route,
    useLocation
  } from "react-router-dom";
import Home from "../../screens/Home";
import Category from "../../screens/Category";
import  Page from "../PageContainer";
import { AnimatePresence } from "framer-motion"


export const Routing = () => {
    const location = useLocation();

    return (        
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={
                            <Page>
                                <Home />
                            </Page>
                    } 
                />  
                <Route path="/drink" element={
                    <Page  cancelTab={true}>
                        <Category />
                    </Page>
                }
                />
                <Route path="/food" element={
                    <Page cancelTab={true}>
                        <Category />
                    </Page>
                }
                />
            </Routes>
        </AnimatePresence>
    )
};

export default Routing;