import './App.css';
import Navbar from './Components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './Components/TextForm';
import { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

function App() {

  const[mode, setMode] = useState('light');
  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  // const removeBodyColor = () => {
  //   document.body.classList.remove('bg-light')
  //   document.body.classList.remove('bg-dark')
  //   document.body.classList.remove('bg-primary')
  //   document.body.classList.remove('bg-secondary')
  //   document.body.classList.remove('bg-success')
  //   document.body.classList.remove('bg-white')
  //   document.body.classList.remove('bg-danger')
  // }
  
  const toggleMode = (cls) => {
    // removeBodyColor();
    // document.body.classList.add('bg-'+ cls);

    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#1a324e'
      showAlert("Dark mode has been enabled!", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode has been enabled!", "success")
    }
  }

  return (
  <>
    <Router>
      <Navbar title="TextUtils" about="About" home="Home" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
        <Routes>
          <Route path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} alert={alert}/>} >
            {/* <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode} alert={alert}/>  */}
          </Route>
        </Routes>
    </Router>
    </>
  );
}

export default App;

Navbar.propTypes = {title: PropTypes.string.isRequired,
                    about: PropTypes.string.isRequired,
                    home: PropTypes.string.isRequired};

Navbar.defaultProps = {title: "Set Title",
                        about: "Set About",
                        home: "Set Home"};