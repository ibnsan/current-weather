import React, {useState} from 'react';
import {MdLanguage} from 'react-icons/md';
import {ChevronUp} from 'react-feather';
import style from './ChangeLng.module.css'
import Dropdown from "../ui/Dropdown/Dropdown";
import {useTranslation} from "react-i18next";
import globalStyle from '../../styles/global.module.css'

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
            <div style={{position: 'relative'}}>
                <div onClick={changeStatusDropdown} className={style.blockChangeLng}>
                    <MdLanguage size={15} className={style.icons}/>
                    <div className={style.txtForBtn}>{currentLng}</div>
                    <ChevronUp size={15} className={style.icons}/>
                </div>
                <Dropdown status={statusShowDropdown} setStatus={setStatusShowDropdown}>

                    <select className={style.selectBlock} size="3">
                        {lngItems.map((item) =>
                            <option onClick={() => {
                                setNewLanguage(item.value)
                            }} value={item.value} className={globalStyle.dropdownContent} key={item.id}>
                                {item.name}
                            </option>
                        )}
                    </select>

                </Dropdown>
            </div>
        </div>
    );
};

export default ChangeLng;