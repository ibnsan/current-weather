import React from 'react';
import AppInupt from "../ui/Input/AppInupt";
import {useTranslation} from "react-i18next";
import style from './SearchCity.module.css'
import AppButton from "../ui/Button/AppButton";

const SearchCity = () => {
    const {t} = useTranslation()
    return (
        <div className={style.parentBlock}>
            <div className={style.dataBlock}>
                <AppInupt type="text" placeholder={t('searchInputPlaceholder')} />
                <AppButton>{t('addButtonInSearchPanel')}</AppButton>
            </div>
        </div>
    );
};

export default SearchCity;