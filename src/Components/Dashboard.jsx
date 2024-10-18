import React, { useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import Sidebar from './Sidebar';
import Navbar from './TopNavbar';
import '../Components/Custom.css';
import NgoTable from './NgoTable';
import NgoUser from './NgoUser';
import Home from './Home';

// Separate DateFilter component
const DateFilter = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  return (
   
   
    <div className="date-filter">
      <form className='form-1'>
        <label style={{fontWeight:"bold"}} htmlFor="fromDate">From:</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
          className="me-2"
        />

        <label style={{fontWeight:"bold"}} htmlFor="toDate">To:</label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
          className="me-2"
        />
        
        <button type="submit" className="btn " style={{backgroundColor:"#AE5EA3", color:"white",fontWeight:"bold"}}>Filter</button>
      </form>
    </div>
    
  );
};
const DateFilter2 = () => {
  const [fromDate2, setFromDate2] = useState('');
  const [toDate2, setToDate2] = useState('');

  return (
    <div className="date-filter">
      <form className='form-2'>
        <label style={{fontWeight:"bold"}} htmlFor="fromDate">From:</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate2}
          onChange={(e) => setFromDate2(e.target.value)}
          className="me-2"
        />

        <label style={{fontWeight:"bold"}} htmlFor="toDate">To:</label>
        <input
          type="date"
          id="toDate"
          value={toDate2}
          onChange={(e) => setToDate2(e.target.value)}
          className="me-2"
        />
        
        <button type="submit" className="btn " style={{backgroundColor:"#AE5EA3", color:"white",fontWeight:"bold"}}>Filter</button>
      </form>
    </div>
  );
};

// Main Dashboard component
const Dashboard = () => {
     const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Function to toggle the sidebar visibility
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

    
  const stats = [
    { title: 'Number of NGOs', count: 102, color: 'primary', icon: <i class="fa-solid fa-eye"></i> },
    { title: 'Number of Registered Users', count: 653, color: 'info', icon: <i class="fa-solid fa-user-tie"></i> },
    { title: 'Number of Active Users', count: 2, color: 'danger', icon: <i class="fa-solid fa-cart-shopping"></i>},
    { title: 'Total Donations', count: 2362567, color: 'warning', icon: <i class="fa-solid fa-eye"></i> },
    { title: 'User Flagged Posts', count: 22, color: 'info', icon: <i class="fa-solid fa-eye"></i> },
    { title: 'NGO Flagged Posts', count: 26, color: 'danger', icon: <i class="fa-solid fa-user-tie"></i> },
    { title: 'Total Number of Donations', count: 903, color: 'success', icon: <i class="fa-solid fa-user-tie"></i> }
  ];
   
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
              {/* Map over stats to create a card for each item */}
              {stats.map((stat, index) => (
                <Col key={index} xs={12} sm={6} lg={3} className="mb-4">
                  <Card className='card' bg={stat.color} style={{ height: '110px' }} text="white">
                    <span className="stat-icon mt-1 ">{stat.icon}</span>
                    <Card.Body className="card-body">
                      <Card.Text className="stat-count">{stat.count}</Card.Text>
                      <Card.Title style={{ fontSize: '17px' }}>{stat.title}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              ))}

              <h5 style={{fontWeight:"bold"}} className="ms-1">NGO-Donation-Top 20:</h5>
              <DateFilter />

              <NgoTable />

              <h5 style={{fontWeight:"bold"}} className="ms-1">NGO-Donation-Top 20:</h5>
              <DateFilter2 />

              <NgoUser />
            </Row>
          </Col>
        </Row>
      </Container>
    

   
    </>
  );
};

export default Dashboard;