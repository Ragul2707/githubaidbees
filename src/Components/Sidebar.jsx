import React, { useState } from 'react';
import { FaAirbnb, FaUsers, FaClipboardList, FaMoneyBillWave } from 'react-icons/fa';
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
                <i style={{fontSize:"30px"}} class="fa-solid fa-bug mt-3 ms-2 me-2"></i>
            
            <h1 className=' '>aid<span>bees</span>
            <p  style={{fontSize:"10px"}}>The social kindness platform</p></h1>
            </div>
        </div>
         <div className='bg-light'>
             
        <div className='circle-logo '>
        <div>
            <h6 className='circle-font'><i class="fa-solid fa-bug"></i></h6> 

        </div> 
      </div>
      <div>
        <h6 className='admin-user '>Admin User</h6>
      </div>
        
         </div>
        
      </div>
    <div className="d-flex flex-column p-3 bg-light">
     
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item" style={{ borderBottom:"1px solid #EFEFEF" ,borderTop:"1px solid #EFEFEF"}}>
          < Link to="/dashboard"  className="nav-link" style={{color:"#353535"}}>
          <i class="fa-solid fa-gauge"></i>  Dashboard 
          </Link>
        </li>
        <li style={{ borderBottom:"1px solid #EFEFEF"}}>
          <button  onClick={toggleMasterMenu} href="#" className="nav-link" style={{color:"#353535"}}>
            <FaClipboardList /> Master <i className={`fa-solid ${isMasterOpen ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
            
          </button>
        
            {isMasterOpen && (
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <Link to='/home' href="#" className="nav-link" style={{ color: "#353535" }}><i class="fa-solid fa-flag-usa"></i> State</Link>
                
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
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaUsers /> User Flagged Posts
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaUsers /> NGO Flagged Posts
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Auditor
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> NGO
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Organization
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> NGO Reviews
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> User
          </a>
        </li>
        <li style={{ borderBottom:"1px solid #EFEFEF"}}>
          <button onClick={toggleMarketMenu} href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Market Place  <i className={`fa-solid ${isMarketPlace ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
          </button>
          {isMarketPlace && (
              <ul className="nav flex-column ms-3">
                <li className="nav-item">
                  <a href="#" className="nav-link" style={{ color: "#353535" }}><i class="fa-solid fa-flag-usa"></i> State</a>
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
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Contact Us
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Banner
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Donation Details
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> Commission
          </a>
        </li>
        <li style={{height:"50px", borderBottom:"1px solid #EFEFEF"}}>
          <a href="#" className="nav-link" style={{color:"#353535"}}>
            <FaMoneyBillWave /> LogOut
          </a>
        </li>
      </ul>
    </div>
    </div>
  );
};

export default Sidebar;
