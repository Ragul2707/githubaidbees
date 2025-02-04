import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus,faUsers,faUser, faBriefcase, faDollarSign, faBuilding,faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons';



const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        console.log("http://localhost:8080/api/tekbay/getTekbay");
        const response = await axios.get("http://localhost:8080/api/tekbay/getTekbay");

          console.log("Response received:", response);
          console.log("Data:", response.data);
          
        setEmployees(response.data.data);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };
    fetchEmployees();
  }, []);

  return (
  
    <div className="container mt-5 card shadow p-4 rounded">
         <Link to="/signup" className="btn btn-primary mb-4 fw-bold">
        Add New Employee <FontAwesomeIcon icon={faUserPlus} className="me-2 ms-2" />
      </Link>
      <h2 className="text-center mb-4 bg-warning ">Employees List-Tekbay <FontAwesomeIcon icon={faUsers} className="me-2" /></h2>
     
      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name <FontAwesomeIcon icon={faUser} className="me-2" /></th>
            <th>Designation <FontAwesomeIcon icon={faBriefcase} className="me-2" /></th>
            <th>Salary <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" /></th>
            <th>Branch ID <FontAwesomeIcon icon={faBuilding} className="me-2" /></th>
          </tr>
        </thead>
        <tbody>
          {employees.length > 0 ? (
            employees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.emp_name}</td>
                <td>{emp.designation}</td>
                <td>{emp.salary}</td>
                <td>{emp.branch_id}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" className="text-center">
                No employees found. 
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;