// Navbar.js
import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './TopNavbar.css';
import { FaAirbnb, FaUsers, FaClipboardList, FaMoneyBillWave } from 'react-icons/fa';
const Navbar = ({ toggleSidebar }) => {
  const navigate = useNavigate(); // Initialize navigate function

  // State to control modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };

  // Handle Logout and redirect to Signup form
  const handleLogout = () => {
    // Perform any necessary cleanup (like clearing session data) here
    navigate("/signupform"); // Redirect to the Signup form page
  };

  return (
    <>
      <nav style={{ backgroundColor: "transparent", borderBottom: "0.1px solid gray" }} className="navbar navbar-light navbar-expand-lg">
        <h2 onClick={toggleSidebar} style={{ color: "black" }} className='ms-4 toglleb'>
          <i className="fa-solid fa-bars"></i> 
        </h2>

          <div className="navbar-nav ms-auto">
          <Link to="/home" className="nav-link nav-item text-grey px-4 ">Home</Link>
          <Link to="/company" className="nav-link nav-item text-grey px-4 ">Company</Link>
          <Link to="/consulting" className="nav-link nav-item text-grey px-4 ">Consulting Service</Link>
          <Link to="/contact" className="nav-link nav-item text-grey px-4 ">Contact Us</Link>
          <Link to="/service" className="nav-link nav-item text-grey px-4 ">Services</Link>
        </div>
        <a className="navbar-brand"></a>
       <button onClick={handleLogout} className="btn btn-primary d-flex align-items-center fw-bold hover-effect me-2">
             <FaUsers />Add Employee
       </button>

      </nav>
    </>
  );
};

export default Navbar;
