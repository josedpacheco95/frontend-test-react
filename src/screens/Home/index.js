import React, {useEffect} from "react";
import { getSubCategories } from "../../api/services";
import Banner from "./Banner";
import Tab from "./Tab"
import CategoryList from "./CategoryList";
const Home = () => {
    const getCategories = async () => {
        const response4 = await getSubCategories("category/114");
    }


    useEffect(() => {
        getCategories().then();
    }, [])
    return(
        <div>
            <Banner />
            <Tab />
            <CategoryList />
        </div>
    )
}

export default Home;