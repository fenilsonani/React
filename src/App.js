import './App.css';
import Navbar from './comp/Navbar.js';
import Form from './comp/Form.js';
// import About from './comp/About';
import React, { useState } from 'react'
import Alert from './comp/Alert';

function App() {
  const [mode, setMode] = useState('light');
  
  const [alert, setAlert] = useState(null);

  const showAlerts = (message, type) => {
    setAlert({
      msg: message,
      type: type,  
    })
    setTimeout(() => {
      setAlert(null);
    }
    , 2000);

  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlerts("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlerts("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }
  return (
    <div className="App">
      <Navbar title="fenil" mode={mode} togglemode={togglemode} />
      {/* <Navbar /> */}
      <div className="container">
        <Alert alert={alert} />
        <Form showAlerts={showAlerts} data="Enter Data" mode={mode} />
      </div>
      {/* <About/> */}
    </div>
  );
}

export default App;
