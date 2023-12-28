
import React, { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      message: message,
      type: type,
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);

  }

  const [darkmode, setDarkmode] = useState({

    background: 'light',
    color: 'black'
  });

  const toggleMode = () => {

    if (darkmode.background === "light") {

      setDarkmode({
        background: "dark",
        color: "white"
      });
      showAlert("Dark Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "#241f35"
      document.title = "TextUtils - Darkmode"
    }
    else {
      setDarkmode({
        background: "light",
        color: "black"
      });
      showAlert("Light Mode Has Been Enabled", "success");
      document.body.style.backgroundColor = "#FFFFFF"
      document.title = "TextUtils - LightMode"
    }


  }

  return (
    <>
      <Router>


        <NavBar title="My App" navlink="About Us" mode={darkmode.background} color={darkmode.color} toggleMode={toggleMode} />

        <Alert alertMessage={alert}></Alert>  
        <div className="container">

          <Switch>
            <Route path="/about">
              <About />
            </Route>   
            <Route path="/">
              <TextForm heading="Welcome To TextUtils " label="Enter The Text Below" mode={darkmode.background} color={darkmode.color} />
            </Route>
          </Switch>

        </div >
      </Router>
    </>
  );
}

export default App;
