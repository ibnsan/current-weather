import React from 'react';
import style from './Dropdown.module.css'

const Dropdown = ({children, status, setStatus}) => {

    let statusIsUserClick = true
    if (status) {
        window.onclick = function () {
            if (!statusIsUserClick) {
                setStatus(false)
                statusIsUserClick = true
            } else {
                statusIsUserClick = false
            }
        }
    }

    return (
        <div className={status ? style.dropdownBlock : style.dropdownDisable}>
            {children}
        </div>
    );
};

export default Dropdown;