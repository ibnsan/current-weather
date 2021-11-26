import React, {useState, useEffect} from "react";
import AppInupt from "../ui/Input/AppInupt";
import {useTranslation} from "react-i18next";
import AppButton from "../ui/Button/AppButton";
import style from './SearchCity.module.css'
import Dropdown from "../ui/Dropdown/Dropdown";
import globalStyle from "../../styles/global.module.css";

const SearchCity = () => {
    const [userQuery, setUserQuery] = useState("");
    const [citiesList, setCitiesList] = useState([])
    const {t} = useTranslation()
    const [statusShowDropdown, setStatusShowDropdown] = useState(false)

    useEffect(() => {
        if (userQuery) {
            let autoComplete;
            let sessionToken;

            autoComplete = new window.google.maps.places.AutocompleteService();
            sessionToken = new window.google.maps.places.AutocompleteSessionToken();

            autoComplete.getPlacePredictions({
                input: userQuery,
                sessionToken: sessionToken,
                types: ["(cities)"],
            }).then(e => {
                console.log(e)
                setCitiesList(e.predictions)
                if (e.predictions.length > 0) {
                    setStatusShowDropdown(true)
                } else {
                    setStatusShowDropdown(false)
                }
            }).catch(err => (console.log(err)))
        }
    }, [userQuery]);

    return (
        <div className={style.parentBlock}>
            <div className={style.dataBlock}>
                <div className={style.inputBlock}>
                    <AppInupt onChange={event => setUserQuery(event.target.value)}
                              value={userQuery}
                              type="text"
                              placeholder={t('searchInputPlaceholder')}/>
                    <Dropdown status={statusShowDropdown} setStatus={setStatusShowDropdown}>
                        <select className={style.selectBlock} size="4">
                            {citiesList.length > 0
                                ?
                                citiesList.map((item) =>
                                <option value={item.structured_formatting.main_text}
                                        className={globalStyle.dropdownContent} key={item.place_id}>
                                    {item.description}
                                </option>)
                                    :
                                <option>no data</option>
                            }
                        </select>
                    </Dropdown>
                </div>
                <div className={style.btnBlock}>
                    <AppButton>{t('addButtonInSearchPanel')}</AppButton>
                </div>
            </div>
        </div>

    );
}

export default SearchCity;