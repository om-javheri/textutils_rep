//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
import Concert from './components/Concert';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Create from './components/Create';
import Edit from './components/Edit';
import Delete from './components/Delete';
import Edit2 from './components/Edit2';
import DeleteConfirm from './components/DeleteConfirm';
document.body.style.backgroundColor='white'

function App() {
  
  const [mode, setmode] = useState('light')
 
  const toggleMode=()=>{
   
    if(mode==='light' || mode==="grey"|| mode==="black"){
      setmode('blue')
      document.body.style.backgroundColor='blue'
      showAlert("Dark mode enabled","success")
      document.title='TextUtils ->Dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title='TextUtils ->Light Mode'
    }
  }
  const toggleModeGrey=()=>{
    
    if(mode==='light' || mode==="blue"|| mode==="black"){
      setmode('grey')
      document.body.style.backgroundColor='grey'
      showAlert("Dark mode enabled","success")
      document.title='TextUtils ->Dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title='TextUtils ->Light Mode'
    }
  }
  const toggleModeBlack=()=>{
    
    if(mode==='light'|| mode==="blue"|| mode==="grey"){
      setmode('black')
      document.body.style.backgroundColor='black'
      showAlert("Dark mode enabled","success")
      document.title='TextUtils ->Dark Mode'
    }
    else{
      setmode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode enabled","success")
      document.title='TextUtils ->Light Mode'
    }
  }
  
  const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type

    })
    setTimeout(()=>{
      setalert(null)
    },2000)
  }
  return (
 <>
 <Router>
 <h2 className='container my-3 text-center'>Concert Management System</h2>
  <b><Navbar navbar_comp1="Ticket Booking System" navbar_comp2="Concert Management System" about="About" mode={mode} toggleMode={toggleMode} toggleModeGrey={toggleModeGrey} toggleModeBlack={toggleModeBlack}/></b>
   
   
   <Alert alert={alert}/>
   <div className="container my-3"  >
    <Routes>
      <Route exact path="/About" element={<About />}/>
      <Route exact path="/" element={<Textform mode={mode}showAlert={showAlert} heading="Try TextUtils-Word counter,Character counter, Remove extra spaces"  />}/>
      {/* <Textform mode={mode}showAlert={showAlert} heading="Enter your text below to analyze"  /> */}
<Route exact path="/Concert" element={<Concert/>}/>
<Route exact path="/Create" element={<Create/>}/>
<Route exact path="/Edit" element={<Edit/>}/>
<Route exact path="/Delete" element={<Delete/>}/>
<Route exact path="/Edit2" element={<Edit2/>}/>
<Route exact path="/Delete_confirm" element={<DeleteConfirm/>}/>

    </Routes>
  

   </div>
  </Router>

   </>
  );
}

export default App;
