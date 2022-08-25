import React, {useContext, useEffect, useState, useCallback} from "react"
import styles from "./Language.module.sass";
import cn from "classnames";
import { ReactComponent as Spain } from "../../assets/icons/spain.svg"
import { ReactComponent as France } from "../../assets/icons/france.svg"
import { ReactComponent as UK } from "../../assets/icons/united-kingdom.svg"
import { ReactComponent as Germany } from "../../assets/icons/germany.svg"
import { MenuContext } from "../../context/menuContext";
import _ from "underscore";

const languagesOptions = [
    {
        icon: <Spain />,
        language: "es",
    },
    {
        icon: <UK />,
        language: "en",
    },
    {
        icon: <Germany />,
        language: "de",
    },
    {
        icon: <France />,
        language: "fr",
    },
];

export const LanguageOption = () => {
    const [language, setLanguage] = useState("es");
    const [languages, setLanguages] = useState(languagesOptions);
    const [select, setSelect] = useState(true);
    const { state } = useContext(MenuContext);

    const getData = useCallback(() => {
        if (state) {
            const langs = _.intersection(languagesOptions.map(lang => lang.language), state.languages).map(lng => {
                const filterLang = languagesOptions.filter(lnga => lnga.language === lng);
                if (filterLang[0]) return filterLang[0] 
            })
            setLanguages(langs);
        }
    }, [state])

    useEffect(() => {
        getData();
    }, [state])

    const handleLanguage = (e, lang) => {
        e.preventDefault();
        setLanguage(lang);
        setSelect(true);
    }

    return (
        <div className={cn({
            [styles.languageContainer]: true,
            [styles.active]: !select,
        })}>
            {
                select? 
                (
                  <>
                    <span onClick={() => setSelect(null)}className={styles.iconsContainer}>
                          {languages.filter(lang => lang.language === language)[0].icon}
                    </span>
                  </>
                ) 
                : 
                (
                    <>   
                        {languages.map(lang => (
                            <span key={lang.language} onClick={(e)=> handleLanguage(e,lang.language)}>
                                {lang.icon}
                            </span>
                        ))}
                    </>
                )
            }
        </div>
    )
}

export default LanguageOption;