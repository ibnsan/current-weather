import React from 'react';
import ChangeLng from "./components/changeLng/ChangeLng";
import SearchCity from "./components/searchCity/SearchCity";
import './styles/global.css'

function App() {

  return (
    <div className="App">
        <ChangeLng/>
        <SearchCity/>
    </div>
  );
}

export default App;
