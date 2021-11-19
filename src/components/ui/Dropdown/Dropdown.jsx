import React from 'react';
import style from './Dropdown.module.css'

const Dropdown = ({itmes, status}) => {
    return (
        <div className={style.pageBlock}>
        <div className={status ? style.dropdownBlock : style.dropdownDisable}>
            {itmes.map((item) =>
                <p className={style.dropdownContent} key={item}>
                    {item}
                </p>
            )}
        </div>
        </div>
    );
};

export default Dropdown;