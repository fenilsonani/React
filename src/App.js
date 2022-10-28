import './App.css';
import Navbar from './comp/Navbar.js';
import Form from './comp/Form.js';
// import About from './comp/About';
import React,{useState} from 'react'

function App() {
  const [mode, setMode] = useState('light');
  const togglemode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <div className="App">
      <Navbar title="fenil" mode={mode} togglemode={togglemode}/>
      {/* <Navbar /> */}
      <div className="container">
        <Form data="Enter Data" mode={mode}/>
      </div>
      {/* <About/> */}
    </div>
  );
}

export default App;
