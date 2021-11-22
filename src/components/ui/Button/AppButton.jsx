import React from 'react';
import style from './AppButton.module.css'

const AppButton = ({children, ...props}) => {
    return (
        <button className={style.ButtonStyle} {...props}>
            {children}
        </button>
    );
};

export default AppButton;