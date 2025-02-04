import React, { useState } from 'react';
import { Row, Col, Container,Card } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './TopNavbar';
import '../Components/Custom.css';

const Dashboard = () => {
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

          <Col lg={isSidebarOpen ? 10 : 12} className="p-0 position-absolute top-0 end-0">
            <Navbar toggleSidebar={toggleSidebar} />

            <Row className="mt-4 ms-1 me-1">
              {/* Left side (text content) */}
              <Col lg={5}>
                <h1 className="text-dark" style={{fontSize:"60px", fontWeight:"bold",marginTop:"22px"}}>
                 Creating breakthroughs to attain the extraordinary.
                </h1>
                <button className='explore-button'>
                  <h1 style={{}}> Explore</h1>
                </button>
               
              </Col>

              {/* Right side (image) */}
             <Col lg={7}>
  <img
    style={{ marginTop: "22px" }}
    src="https://tekbay.jp/wp-content/uploads/2022/09/Illustration-1.png"
    alt="IT Company"
    className="img-fluid rounded shadow-lg img-hover-effect"  // Add the custom class
  />
</Col>


               <Row className="mt-4 me-1">
              {/* Full-width text section */}
              <Col lg={12} className="text-center service-section">
                <h1 className="service-title">Services</h1>
                <p className="service-description">
                  Efficiency combined with a goal-oriented approach.
                </p>
                <p className="service-details">
                  We provide a broad range of IT services, including cloud technologies, big data analytics, SAP, and blockchain, to help organizations control costs, change and innovate processes, explore market possibilities, and emerge as leaders.
                </p>
              </Col>
            </Row>

              <div className="container mt-4">
      <Row>
        {/* Row 1 */}
        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/004/655/714/non_2x/an-editable-design-illustration-of-data-science-vector.jpg"
                  alt="Data Science"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Data Science</Card.Title>
                  <Card.Text>
                    Best in-class analytics tools and techniques.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://as2.ftcdn.net/v2/jpg/05/02/28/99/1000_F_502289957_n5bgR64o06ZVGwCr4JYOiIkcRmn4avej.jpg"
                  alt="SAP"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>SAP</Card.Title>
                  <Card.Text>
                    High Performance ERP solutions.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.7DvdxywcJETOSL3zMrQwxwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7"
                  alt="Blockchain"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Block Chain</Card.Title>
                  <Card.Text>
                    Decentralized blockchain Apps development.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://ts4.mm.bing.net/th?id=OIP.4iPHYnR7Hn6r37kg6SyAmQHaHa&pid=15.1"
                  alt="IoT"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>ІОТ</Card.Title>
                  <Card.Text>
                    IoT platform analytics, security, applications and services.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      {/* Row 2 */}
      <Row>
        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.1LLSUC_TF1z9y75VHtqdogHaHa?w=186&h=186&c=7&r=0&o=5&pid=1.7"
                  alt="Cloud"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Cloud</Card.Title>
                  <Card.Text>
                    Business intelligence solutions to transform raw data.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.q26l-5zNG8L-yovD7YUHWAHaFy?w=237&h=186&c=7&r=0&o=5&pid=1.7"
                  alt="Web"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Web</Card.Title>
                  <Card.Text>
                    Design, develop, embed enterprise-level cloud applications.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.ow1cEn_PaadF95Cchsn8FwHaHa?w=157&h=180&c=7&r=0&o=5&pid=1.7"
                  alt="AI/Machine Learning"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>AI/Machine Learning</Card.Title>
                  <Card.Text>
                    Web development, Web consulting, SEO, CMS, eCommerce.
                  </Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>

        <Col lg={3} md={6} className="mb-4">
          <Card className="shadow rounded">
            <Row className="g-0">
              <Col md={4} className="d-flex align-items-center">
                <img
                  src="https://th.bing.com/th/id/OIP.LT9lGqjVbTCxsm8P1ZRSMwHaFR?w=296&h=187&c=7&r=0&o=5&pid=1.7"
                  alt="Mobile"
                  className="img-fluid rounded-start"
                />
              </Col>
              <Col md={8}>
                <Card.Body>
                  <Card.Title>Mobile</Card.Title>
                  <Card.Text>We have an app for every idea.</Card.Text>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
        
      </Row>

         <Row className="mt-4 ms-1 me-1">
              {/* Left side (text content) */}
                   <Col lg={6}>
  <img
    style={{ marginTop: "22px" }}
    src="https://tekbay.jp/wp-content/uploads/2022/09/cup-426x588.png"
    alt="IT Company"
    className="img-fluid rounded shadow-lg img-hover-effect"  // Add the custom class
  />
</Col> 
              <Col lg={6}>
              
                  <h1 style={{fontSize:"20px",marginTop:"30px",color:"blue",textDecoration:"underline"}}>CONSULTANCY</h1>
               
                <h1 className="text-dark" style={{fontSize:"60px", fontWeight:"bold",marginTop:"22px"}}>
                    Creating value across borders
                </h1>
                <p style={{color:"gray",marginTop:"70px"}}>
                  We know what it takes to develop a quickly growing IT and digital service company: maximum efficiency, adaptability, and perception. With an agile approach adapted by our management knowledge, Tekbay seeks to serve you in all aspects.
                </p>
                <button className='explore-button'>
                  <h1 style={{fontSize:"30px"}}> Employer</h1>
                </button>
               
              </Col>

              {/* Right side (image) */}
        
 </Row>

   <Row className="mt-4 ms-1 me-1">
              {/* Left side (text content) */}
                   <Col lg={6}>
  <img
    style={{ marginTop: "22px", height:"500px", width:"400px" }}
    src="https://tekbay.jp/wp-content/uploads/2022/09/Illustration-2.png"
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
              We live at a time when industry and innovation collide, creating both possibilities and risks. Tekbay provides IT solutions for businesses all around the world. We are the most sought-after firm in the market due to our superior cross-sector experience in cloud computing, IoT, cyber security, blockchain, analytics, AI, and RPA. We are unrivaled in human resource management, assisting professionals to attain their full potential. 
                </p>
              
               
              </Col>

             
        
 </Row>
   <Row>
    
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
</Row>

              
 
    </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
