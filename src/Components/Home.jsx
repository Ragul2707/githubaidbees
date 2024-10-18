import React, { useState } from 'react'
import { Col, Container, Navbar, Row } from 'react-bootstrap'
import Sidebar from './Sidebar';




const Home = () => {
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };



  return (
    <>
      <Container fluid className="position-relative">
        <Row>
          {isSidebarOpen && (
            <Col lg={2} className="p-0 position-fixed">
              <Sidebar />
            </Col>
          )}

         
          <Col lg={isSidebarOpen ? 10 : 12} className="p-0 position-fixed top-0 end-0">
         
          <nav style={{backgroundColor:"#F05368"}} className="navbar navbar-light justify-content-between top-0">
        <h2 onClick={toggleSidebar} style={{color:"white"}} className='ms-4 toglleb'><i class="fa-solid fa-bars"></i> </h2>
      <a className="navbar-brand"></a>
      <button  className="btn"><i class="fa-solid fa-right-from-bracket"></i>Log out</button>
    </nav>
           <Container>
            <div style={{marginTop:"10%", width:"90%"}} className="card ms-5" >
  <div class="card-header">
    Featured
  </div>
  <div  className="card-body">
    <h5 style={{color:"red"}} className="card-title">Special title treatment</h5>
    <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
           </Container>
  
    

            
          </Col>
        </Row>
      </Container>
    

   
    </>
  )
}

export default Home