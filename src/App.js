import './App.css';
import Navbar from './comp/Navbar.js';
import Form from './comp/Form.js';
import About from './comp/About';

function App() {
  return (
    <div className="App">
      {/* <Navbar title="fenil"/> */}
      <Navbar />
      {/* <div className="container">
        <Form data="Enter Data"/>
      </div> */}
      <About/>
    </div>
  );
}

export default App;
