import './App.css';
import Navbar from './Navbar';
import FormText from './FormText';
import { useState } from 'react';
import Alert from './Alert';
import About from './About';
import { 
  BrowserRouter as Router,
  Route,
  Routes,  // Updated from Switch to Routes
} from 'react-router-dom';

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);
 
  const showAlert = (msg, type) => {
    setAlert({
      message: msg,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#212529";
      document.body.style.color = "white";
      showAlert("Dark Mode Has been Enabled", "success");
    } else {
      setmode("light");
      document.body.style.color = "black";
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Has been Enabled", "success");
    }
  };

  const bgGreen = () => {
    document.body.style.backgroundColor = "green";
    document.body.style.color = "white";
  };

  const bgSky = () => {
    document.body.style.backgroundColor = "Skyblue";
    document.body.style.color = "white";
  };

  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} BgGreen={bgGreen} BgSky={bgSky}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>  {/* Updated from Switch to Routes */}
            <Route exact path="/about" element={<About />} />  {/* Updated Route to use element */}
            <Route exact path="/" element={<FormText showAlert={showAlert} heading="Enter your Text To Analyze below" />} />  {/* Updated Route to use element */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
