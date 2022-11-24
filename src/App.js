import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';



function App() {
//   let modevalue='dark'; 

  const [mode,setMode] = useState('light'); //whether dark mode is enable or not
  const [alert,setAlert] = useState(null);
  const [colormode,setColor]=useState('white');
  
  const Showalert=(type,message)=>{

   setAlert({
      type:type,
      msg:message
      
   })

   setTimeout(() => {
      setAlert(null);
   }, 1500);

  }

  const togglemode=()=>{
     if(mode==='light')
     {
        setMode('dark');
        Showalert("success","Enabled dark mode");
     }
    else
    {
        setMode('light');
        Showalert("success","Enabled light mode");
    }
  }
  const togglemodeblue=()=>{
   if(colormode==='white')
   {      
      setColor('#535371');           
   }
   else
   {
      setColor('white');
   }

  
}

const togglemodegreen=()=>{
   if(colormode==='white')
   {      
      setColor('green');           
   }
   else
   {
      setColor('white');
   }

  
}
const togglemodered=()=>{
   if(colormode==='white')
   {      
      setColor('red');           
   }
   else
   {
      setColor('white');
   }

  
}
  return (
   
     <>
     <div style={{backgroundColor:mode==='light'?colormode:'white'}}>
     <Navbar toggleMode={togglemode} about="About Us" mode={mode} togglemodeblue={togglemodeblue} togglemodegreen={togglemodegreen}
     togglemodered={togglemodered}/>
     <Alert alert={alert}/>
     <Router>
     <div className="Container">           
     {/* <Textform heading="Enter text to analyze below" Showalert={Showalert}></Textform>  */}     
      <Routes>
         <Route exact path="/Textform" element={<Textform heading="Enter text to analyze below" Showalert={Showalert}></Textform> }/>   
         <Route exact path="/About" element={<About></About> }/>                
      </Routes>
     </div>
     </Router>
     </div>
     </>
     
  );
}

export default App;
