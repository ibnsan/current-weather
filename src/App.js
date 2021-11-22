import React from 'react';
import ChangeLng from "./components/changeLng/ChangeLng";
import {useTranslation} from "react-i18next";

function App() {
const {t} = useTranslation()

  return (
    <div className="App">
        <ChangeLng/>
        <div>
            <h1>
                {t('title')}
            </h1>
        </div>
    </div>
  );
}

export default App;
