import React, { createContext, useReducer, useEffect, useCallback} from "react";
import { getAll, getCompanyFromMenu } from "../../api/services";

export const MENU_STATE = {
    menu: {},
    languages: ["es"],
}

export const menuReducer = (state, action) => {
    switch(action.type) {
        case 'SET_MENU':
            return {...state, menu: action.menu};
        case "SET_LANGUAGES":  
            return {...state, languages: action.languages};
        default:
            return state;
    }
}


export const MenuContext = createContext();

export const MenuContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(menuReducer, MENU_STATE);
   
    
    const getData = useCallback(async() => {
        const company = await getAll("company");
        setMenu(company);
        setLanguages(company?.menu_languages);
    }, [])

    useEffect(() => {
        getData();
    }, [])
    
    const setMenu = (menu) => {
        dispatch({type: "SET_MENU", menu});
    }
    const setLanguages= (languages) => {
        dispatch({type: "SET_LANGUAGES", languages});
    }

    return (
        <MenuContext.Provider value={{
            state, 
            dispatch, 
            setMenu, 
            setLanguages
        }} >
            { children }
        </MenuContext.Provider>
    )
}

export default MenuContextProvider;