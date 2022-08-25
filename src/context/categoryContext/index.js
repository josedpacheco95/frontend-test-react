import React, { createContext, useReducer, useEffect, useCallback} from "react";
import { getAll, getSubCategories } from "../../api/services";

export const CATEGORY_STATE = {
    categories: [],
    category: {},
    categoryId: null,
    categoryTabId: null,
    subCategories: [],
    subCategoryId: null,
}

export const categoryReducer = (state, action) => {
    switch(action.type) {
        case 'SET_CATEGORIES':
            return {...state, categories: action.categories};
        case 'SET_CATEGORY':
            return {...state, category: action.category};
        case "SET_SUBCATEGORIES":  
            return {...state, subCategories: action.subCategories};
        case "SET_CATEGORYID":  
            return {...state, categoryId: action.categoryId};
        case "SET_CATEGORYTABID":  
            return {...state, categoryTabId: action.categoryTabId};
        case "SET_SUBCATEGORYID":  
            return {...state, subCategoryId: action.subCategoryId};
        default:
            return state;
    }
}


export const CategoryContext = createContext();

export const CategoryContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(categoryReducer, CATEGORY_STATE);
   
    
    const getData = useCallback(async() => {
        const category = await getAll("category");
        setCategories(category);
    }, [])

    useEffect(() => {
        getData();
    }, [])
    
    const setCategories = (categories) => {
        dispatch({type: "SET_CATEGORIES", categories});
    }

    const setCategory = (category) => {
        dispatch({type: "SET_CATEGORY", category});
    }
   
    const setSubCategories = (subCategories) => {
        dispatch({type: "SET_SUBCATEGORIES", subCategories});
    }
    
    const setCategoryId = (categoryId) => {
        dispatch({type: "SET_CATEGORYID", categoryId});
    }

    const setCategoryTabId = (categoryTabId) => {
        dispatch({type: "SET_CATEGORYTABID", categoryTabId});
    }
    
    const setSubCategoryId = (subCategoryId) => {
        dispatch({type: "SET_SUBCATEGORYID", subCategoryId});
    }


    return (
        <CategoryContext.Provider value={{
            ...state, 
            dispatch,
            setCategory, 
            setSubCategories,
            setCategoryId,
            setCategoryTabId,
            setSubCategoryId,
        }} >
            { children }
        </CategoryContext.Provider>
    )
}

export default CategoryContextProvider;