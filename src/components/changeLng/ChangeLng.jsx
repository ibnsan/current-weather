import React, {useState} from 'react';
import {MdLanguage} from 'react-icons/md';
import {ChevronUp} from 'react-feather';
import style from './ChangeLng.module.css'
import Dropdown from "../ui/Dropdown/Dropdown";

const ChangeLng = () => {
    const [statusShowDropdown, setStatusShowDropdown] = useState(false)

    function changeStatusDropdown() {
        let newStatus = !statusShowDropdown
        setStatusShowDropdown(newStatus)
    }

    let currentLng = localStorage.getItem('lng')
    let lngItems = ['EN', 'UA', 'HE']
    return (
        <div className={style.headerBlock}>
            <div>
                <div onClick={changeStatusDropdown} className={style.blockChangeLng}>
                    <MdLanguage size={15} className={style.icons}/>
                    <div className={style.txtForBtn}>{currentLng}</div>
                    <ChevronUp size={15} className={style.icons}/>
                </div>
                <Dropdown status={statusShowDropdown} itmes={lngItems}/>
            </div>
        </div>
    );
};

export default ChangeLng;