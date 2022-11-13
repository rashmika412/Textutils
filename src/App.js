import React from 'react';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";  

function App() {
  const [mode, setMode] = useState("light"); // whether dark mode is enable or not
  const [alert, setAlert]=useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg:message,
      type:type
    })
  }

  const toggleMode= () => {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ('#212529');
      showAlert('Dark Mode has been enabled','success');
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = ('white');
      showAlert('Light Mode has been enabled','success');
    }
  }

  return (
    <>
    <Router>
        <Navbar title={"TextUtils"} aboutText={"About"} mode={mode} toggleMode={toggleMode} />

         <Alert alert = {alert}/>
   <Routes>
         <Route exact path="/about" element={<About/>}></Route>
    
         <Route exact path="/" element={<TextForm showAlert= {showAlert} heading="Enter the text to analyse" mode={mode}/>}></Route>
   </Routes>
 
  </Router>
  
 </>
  );
}

export default App;
 