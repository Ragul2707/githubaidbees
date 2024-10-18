import React from 'react';
import {BrowserRouter as Router,Routes,Route}  from 'react-router-dom'
import Sidebar from './Components/Sidebar';
import Navbar from './Components/TopNavbar';
import Dashboard from './Components/Dashboard';
import { Container } from 'react-bootstrap';
import Home from './Components/Home';


const App = () => {
  return (
    // <div className="d-flex">
    //   <Sidebar />
    //   <div className="flex-grow-1">
    //     <Navbar />
    //     <Container className="mt-4">
    //       <Dashboard />
    //     </Container>
    //   </div>
    // </div>
    <>
    <Router>
      <Routes>
       <Route path='/side' element={<Sidebar/>}/>
       <Route path='/top' element={<Navbar/>}/>
       <Route path='/dashboard' element={<Dashboard/>}/>
       <Route path='/home' element={<Home/>} />
      
      </Routes>
    </Router>
</>
  );
};

export default App;
