import React from 'react';
import style from './Dropdown.module.css'

const Dropdown = ({itmes, status, setStatus, action}) => {

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
            {itmes.map((item) =>
                <p onClick={() => {action(item.value)}} className={style.dropdownContent} key={item.id}>
                    {item.name}
                </p>
            )}
        </div>
    );
};

export default Dropdown;