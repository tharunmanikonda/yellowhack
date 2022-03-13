import './App.css';
import React,{useState} from 'react';

import TableData from './components/table';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
    <div className="container">
      <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
      <div className="switch-checkbox">
        <label className="switch">
          <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
          <span className="slider round"> </span>
        </label>
      </div>
      <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
    </div>
    <div  style = {{textAlign:'center'}}>
      <h1>Cool its {darkMode ? "Dark" : "Light"} Mode </h1>
    </div>
    <TableData/>
  </div>



    
  );
}

export default App;
