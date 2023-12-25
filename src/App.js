// import logo from './logo.svg';

import  React ,  { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) => {

      setAlert({
        message : message,
        type : type,
      })
      
      setTimeout(() => {
        setAlert(null)
      }, 1500);

  }

  const[darkmode , setDarkmode] = useState({

      background : 'light',
      color : 'black'
  }); 

  const toggleMode = () => {

    if(darkmode.background === "light"){

      setDarkmode({
        background : "dark",
        color : "white"
      });
      showAlert("Dark Mode Has Been Enabled" , "success");
      document.body.style.backgroundColor = "#241f35"
    }
    else {
      setDarkmode({
        background : "light",
        color : "black"
      });
      showAlert("Light Mode Has Been Enabled" , "success");
      document.body.style.backgroundColor = "#FFFFFF"
    }


  }

  return (
    <>


      {/* <div classNameName="headerWrapper">
        <div classNameName="headerFlex">
          <div classNameName="headerNavigationLink">
            <ul>
              <li>
                <p>Home</p>
              </li>
              <li>
                <p>About</p>
              </li>
              <li>
                <p>Contact</p>
              </li>
              <li>
                <p>Carrer</p>
              </li>
            </ul>
          </div>
        </div>
      </div> */}
      <NavBar title="My App" navlink="About Us" mode={darkmode.background} color={darkmode.color} toggleMode={toggleMode} />
      {/* <Alert alertMessage="Hello Paras , How Are You , I Hope You Are Doing Good"></Alert> */}
      <Alert alertMessage={alert}></Alert>
      {/* <NavBar/> */}
      <div className="container">
        <TextForm heading="Welcome To TextUtils " label="Enter The Text Below"  mode={darkmode.background} color={darkmode.color} />
        {/* <About></About> */}
      </div>
    </>
  );
}

export default App;
