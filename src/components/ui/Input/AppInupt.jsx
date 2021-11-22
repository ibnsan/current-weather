import React from 'react';
import style from './AppInput.module.css'

const AppInupt = (props) => {
    return (
        <input className={style.inputStyle} {...props} />
    );
};

export default AppInupt;