import React, { useState } from 'react';
import { FaBuilding, FaUsers, FaClipboardList, FaMoneyBillWave,FaAddressBook,FaCopyright,FaBriefcase } from 'react-icons/fa';
import '../Components/Custom.css'
import Home from './Home';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const [isMasterOpen, setIsMasterOpen] = useState(false); 
    const [isMarketPlace, setIsMarketPlace] = useState(false); 

  const toggleMasterMenu = () => {
    setIsMasterOpen(!isMasterOpen); 
  };
  const toggleMarketMenu = () => {
    setIsMarketPlace(!isMarketPlace); 
  };
  return (
     <div className='bg-light' style={{overflow:"auto", height:"100vh"}}>
     <div>
        <div className='aid-bees  ' style={{height:"62px"}}>
            <div className='d-flex'>
              <div  className='ms-3 mt-2'>
                  <i style={{fontSize:"40px"}} class="fa-solid fa-computer"></i>
              </div>
             
               
            
            <h1 className='ms-3 '>
               <a href="https://tekbay.jp/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "inherit" }}>
               Tekbay
              </a>
            <p  style={{fontSize:"11px"}}>"The future is digital."</p></h1>
            </div>
        </div>
         <div className="bg-light">
  {/* Animated section with computer-related animation */}
  <div className="sidebar-header">
    <div className="animation-container">
      <i className="fa-solid fa-desktop"></i> {/* Computer-related icon */}
    </div>
  </div>
</div>

        
      </div>
    <div className="d-flex flex-column p-3 bg-light">
     
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" style={{ borderBottom:"1px solid #EFEFEF" ,borderTop:"1px solid #EFEFEF"}}>
          < Link to="/employeelist"  className="nav-link fw-bold" style={{color:"#353535"}}>
          <i class="fa-regular fa-address-book"></i> Employee list 
          </Link>
        </li>
        <li style={{ borderBottom:"1px solid #EFEFEF"}}>
          <button  onClick={toggleMasterMenu} href="#" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaClipboardList /> Master <i className={`fa-solid ${isMasterOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            
          </button>
        
            {isMasterOpen && (
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <Link to='' href="#" className="nav-link" style={{ color: "#353535" }}><i class="fa-solid fa-flag-usa"></i> State</Link>
                
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" style={{ color: "#353535" }}><i class="fa-solid fa-globe"></i> Country</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" style={{ color: "#353535" }}><i class="fa-solid fa-city"></i> City</a>
                </li>
              </ul>
            )}
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaUsers /> Explorer
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="/consulting" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaUsers /> Consultancy
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="service" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaMoneyBillWave /> About Tekbay
          </a>
        </li>
        
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="/service" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaBriefcase /> User
          </a>
        </li>
        <li style={{ borderBottom:"1px solid #EFEFEF"}}>
          <button  href="/company" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaBuilding />Company Profile  <i className={`fa-solid 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
         
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="/copyright" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaCopyright /> Copyrights
          </a>
        </li>
        
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="/contact" className="nav-link fw-bold" style={{color:"#353535"}}>
            <FaAddressBook /> Contact Us
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
