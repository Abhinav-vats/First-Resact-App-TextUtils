import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, alertType) => {
    setAlert({
      message: message,
      alertType
    })

    setTimeout(() => {
      setAlert(null)
    }, 2000)
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
    }
  }
  return (
    <Router>
      <Navbar title="abbyPicsoid" mode={mode} toggleMode={toggleMode} />

      <div className="container my-3">
        <Alert alert={alert} />
        <Routes>
          <Route  path="/about" element={<About modes={mode} />} />
          <Route  path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} heading2="Final result" ph="Enter Text Here!!" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
