import './App.css';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
import About from './Components/About';
import React, { useState } from 'react'
import Alert from './Components/Alert';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 



function App() {
//   let modevalue='dark'; 

  //const [mode,setMode] = useState('light'); //whether dark mode is enable or not
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

  const removeclass=()=>{
   document.body.classList.remove('bg-primary');
   document.body.classList.remove('bg-secondary');
   document.body.classList.remove('bg-success');
   document.body.classList.remove('bg-danger');
   document.body.classList.remove('bg-warning');
   document.body.classList.remove('bg-info');
  }

  const togglemode=(cls)=>{
   removeclass();
   console.log(cls)
     
     document.body.classList.add('bg-'+cls);
   //   if(mode==='light')
   //   {
   //      setMode('dark');
        
   //      Showalert("success","Enabled dark mode");
   //   }
   //  else
   //  {
   //      setMode('light');
        
   //      Showalert("success","Enabled light mode");
   //  }
  }
  const togglemodeblue=()=>{
   if(colormode==='white')
   {      
      setColor('#595967');
      document.body.style.backgroundColor='#595967';
      Showalert("success","Enabled dark mode");          
   }
   else
   {
      setColor('white');
      document.body.style.backgroundColor='white';
      Showalert("success","Enabled light mode");
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
     <div>
     {/* <div style={{backgroundColor:mode==='light'?colormode:'white'}}> */}
     <Navbar toggleMode={togglemode} about="About Us"  togglemodeblue={togglemodeblue} togglemodegreen={togglemodegreen}
     togglemodered={togglemodered}/>
     <Alert alert={alert}/>
     <Router>
     <div className="Container">             
      <Routes>
         <Route exact path="/Textform" element={<Textform heading="Enter text to analyze below" Showalert={Showalert}></Textform> }/>   
         <Route exact path="/About" element={<About></About> }/>                
      </Routes>
     </div>
     </Router>
     {/* <Textform heading="Enter text to analyze below" Showalert={Showalert}></Textform>
     <About></About> */}
     </div>    
     </>
     
  );
}

export default App;
