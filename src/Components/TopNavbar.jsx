import React, { useState } from 'react';
import Home from './Home';


const Navbar = ({toggleSidebar}) => {
    // State to control modal visibility
  const [isModalVisible, setModalVisible] = useState(false);

  // Function to toggle modal visibility
  const handleModalToggle = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <>
    <nav style={{backgroundColor:"#F05368"}} className="navbar navbar-light justify-content-between">
        <h2 onClick={toggleSidebar} style={{color:"white"}} className='ms-4 toglleb'><i class="fa-solid fa-bars"></i> </h2>
      <a className="navbar-brand"></a>
      <button onClick={handleModalToggle} className="btn"><i class="fa-solid fa-right-from-bracket"></i>Log out</button>
    </nav>

    <div className={`modal fade ${isModalVisible ? 'show' : ''}`} style={{ display: isModalVisible ? 'block' : 'none' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Logout Confirmation</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModalToggle}></button>
            </div>
            <div className="modal-body">
              <p>Are you sure you want to log out?</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModalToggle}>
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Confirm Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Navbar;
