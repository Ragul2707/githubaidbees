// consulting
import React from 'react';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Navbar from './Components/TopNavbar';
import Dashboard from './Components/Dashboard';
import { Container } from 'react-bootstrap';
import Home from './Components/Home';
import EmployeeList from './Components/EmployeeList';
import SignupForm from './Components/SignupForm';
import Dummy from './Components/Dummy';
import NgoTable from './Components/NgoTable';
import NgoUser from './Components/NgoUser';
import Service from './Components/Service';


const App = () => {
  return (
   
    <>
    <Router>
      <Routes>
       <Route path='/side' element={<Sidebar/>}/>
       <Route path='/top' element={<Navbar/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/home' element={<Home/>} />
       <Route path='/employeelist' element={<EmployeeList/>} />
       <Route path='/signupform' element={<SignupForm/>} />
       <Route path='/company' element={<Dummy/>} />
       <Route path='/copyright' element={<Dummy/>} />
       <Route path='/consulting' element={<NgoTable/>} />
       <Route path='/contact' element={<NgoUser/>} />
       <Route path='/service' element={<Service/>} />
      
      </Routes>
    </Router>
</>
  );
};

export default App;
