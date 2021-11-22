import React, {useState} from 'react';
import {MdLanguage} from 'react-icons/md';
import {ChevronUp} from 'react-feather';
import style from './ChangeLng.module.css'
import Dropdown from "../ui/Dropdown/Dropdown";
import {useTranslation} from "react-i18next";

const ChangeLng = () => {
    const [statusShowDropdown, setStatusShowDropdown] = useState(false)

    const {i18n} = useTranslation();
    const setNewLanguage = (language) => {
        i18n.changeLanguage(language);
        localStorage.setItem('lng', language)
        setStatusShowDropdown(false)
    }

    const changeStatusDropdown = () => {
        let newStatus = !statusShowDropdown
        setStatusShowDropdown(newStatus)
    }

    let currentLng = localStorage.getItem('lng')
    let lngItems = [
        {
            id: '1',
            value: 'en',
            name: 'EN',
        }, {
            id: '2',
            value: 'ua',
            name: 'UA',
        }, {
            id: '3',
            value: 'he',
            name: 'HE',
        },
    ]
    return (
        <div className={style.headerBlock}>
            <div>
                <div onClick={changeStatusDropdown} className={style.blockChangeLng}>
                    <MdLanguage size={15} className={style.icons}/>
                    <div className={style.txtForBtn}>{currentLng}</div>
                    <ChevronUp size={15} className={style.icons}/>
                </div>
                <Dropdown status={statusShowDropdown} action={setNewLanguage} setStatus={setStatusShowDropdown}
                          itmes={lngItems}/>
            </div>
        </div>
    );
};

export default ChangeLng;