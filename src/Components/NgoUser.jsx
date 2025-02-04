// contact us
import React, { useState } from 'react';
import { useNavigate ,Link} from 'react-router-dom'; // Import useNavigate for programmatic navigation
import './TopNavbar.css';
import { FaAirbnb, FaUsers, FaClipboardList, FaMoneyBillWave } from 'react-icons/fa';
import { Row, Col, Container,Card } from 'react-bootstrap';
const NgoUser = ({ toggleSidebar }) => {
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
         <div  className='ms-3 mt-2'>
                  <i style={{fontSize:"40px"}} class="fa-solid fa-computer"></i>
              </div>
       
        <h2 onClick={toggleSidebar} style={{ color: "blue",fontWeight:"bold" }} className='ms-4 toglleb'>
           Tekbay 
        </h2>
        

          <div className="navbar-nav ms-auto">
          <Link to="/home" className="nav-link nav-item text-grey px-4 ">Home</Link>
          <Link to="/company" className="nav-link nav-item text-grey px-4 ">Company</Link>
          <Link to="/consulting" className="nav-link nav-item text-grey px-4 ">Consulting Service</Link>
          <Link to="/contact" className="nav-link nav-item text-grey px-4 ">Contact Us</Link>
          <Link to="/signup" className="nav-link nav-item text-grey px-4 ">Services</Link>
        </div>
        <a className="navbar-brand"></a>
       <button onClick={handleLogout} className="btn btn-primary d-flex align-items-center fw-bold hover-effect me-2">
             <FaUsers />Add Employee
       </button>

      </nav>
    
    <Container>
        
         <Row className="mt-5 ms-1 me-1">

          
              <Col lg={6}>
              
                  {/* <h1 style={{fontSize:"20px",marginTop:"30px",color:"blue",textDecoration:"underline"}}>CONSULTANCY</h1> */}
               
                <h1 className="text-dark" style={{fontSize:"60px", fontWeight:"bold",marginTop:"22px"}}>
                    Contact Us
                </h1>
                <p style={{color:"gray",marginTop:"70px"}}>
                  Collaborate. Create. Transform. Outperform.

Through innovation and technology, we breathe new life into your processes and assist ambitious customers in achieving extraordinary outcomes.
                </p>
                <button className='explore-button'>
                  <h1 style={{fontSize:"30px"}}> Employer</h1>
                </button>
               
              </Col>
              {/* Left side (text content) */}
                   <Col lg={6}>
  <img
    style={{ marginTop: "22px" }}
    src="https://tekbay.jp/wp-content/uploads/2022/09/services_banner_kv.png"
    alt="IT Company"
    className="img-fluid rounded shadow-lg img-hover-effect"  // Add the custom class
  />
</Col> 

              {/* Right side (image) */}
        
 </Row>

   <Row className="mt-4 ms-1 me-1">
              {/* Left side (text content) */}
                   <Col lg={6}>
  <img
    style={{ marginTop: "22px", height:"500px", width:"400px" }}
    src="	https://tekbay.jp/wp-content/uploads/2022/10/KV-CloudComputering.png"
    alt="IT Company"
    className="img-fluid rounded shadow-lg img-hover-effect"  // Add the custom class
  />
</Col> 
              <Col lg={6}>
              
                  <h1 style={{fontSize:"20px",marginTop:"14px",color:"pink",textDecoration:"underline"}}>
                   ABOUT Tekbay</h1>
               
                <h1 className="text-dark" style={{fontSize:"60px", fontWeight:"bold",marginTop:"22px"}}>
                    Cutting-Edge IT Solutions, Cross-Sector Expertise, Global Insights
                </h1>
                <p style={{color:"gray",marginTop:"23px"}}>
             We aim to be your success launchpad, guiding digital transformation through innovative software and analytics solutions, so you may emerge as industry leaders.

“Challenging the existing quo and sprouting inventive alternatives that remodel your bottom line” is Tekbay’s key principle. Every project allows us to share praises and prospects, drive and execute best-in-class technology, and brainstorm effective tactics to launch ideas. Our organisation is a hotbed of unique ideas, and we operate with an entrepreneurial spirit and a thirst for knowledge. In a word, we at Tekbay want to combine introspective technology with human-centered organisations. 
                </p>
              
               
              </Col>

             
        
 </Row>

          <div class='profile'>
            <div>
              <h1 style={{fontWeight:"bold"}}>Company Profile</h1>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>Company Name:</h5>
               <h5>  株式会社TEKBAY </h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>Representative Director:</h5>
               <h5>Ogawa Yuzo </h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>Capital:</h5>
               <h5>590万円 </h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>Corporate Number :</h5>
               <h5>211398022134 </h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>URL:</h5>
               <h5> tekbay.jp </h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>TEL:</h5>
               <h5>  03-6555-2631 </h5>
            </div>
            <div style={{display:"flex",flexDirection:"row",gap:"50px",margin:"30px"}}>
               <h5>Address:</h5>
               <h5>160-0023 Tokyo, Shinjuku City, Nishishinjuku, 7−4−7 3F. </h5>
            </div>
          </div>
          
          <div class="row" style={{marginTop:"50px"}}>
  <div class="col-6">
     <h2 style={{fontWeight:"bold", margin:"10px"}}>Newsletter</h2>
     <h1 style={{fontSize:"50px", fontWeight:"bold",margin:"10px"}}>Get in touch!</h1>
     <p style={{margin:"10px",fontStyle:"italic"}}>Sign up now! Receive the latest updates, tools, special promotions and sales, and more from Tekbay.</p>
  </div>
  <div class="col-6">
  <a href="mailto:support@tekbay.jp">
    <h4 style={{marginLeft:"150px"}}>support@tekbay.jp</h4>
  </a>

 
  <div class="social-icons">
    <a href="https://facebook.com" target="_blank" class="social-icon"><i class="fab fa-facebook"></i></a>
    <a href="https://instagram.com" target="_blank" class="social-icon"><i class="fab fa-instagram"></i></a>
    <a href="https://twitter.com" target="_blank" class="social-icon"><i class="fab fa-twitter"></i></a>
    <a href="https://linkedin.com" target="_blank" class="social-icon"><i class="fab fa-linkedin"></i></a>
  </div>
</div>
          <hr style={{marginTop:"30px"}} />

  <Row>
     <Col lg={6}>
      <p>© 2022. All rights reserved by <a href="">Tekbay.</a></p>
     </Col>

      <Col lg={6}>
      <div class='social-iconn' style={{display:"flex",flexDirection:"row",gap:"50px",marginLeft:"70px",color:"gray",fontWeight:"lighter"}}>

      <h5 class='social-iconn'>Privacy Policy</h5>
      <h5 class='social-iconn'>Terms Of Use</h5>
      </div>
     
      
      </Col>

  </Row>
</div>
 </Container>
    </>

  );
};

export default NgoUser;
