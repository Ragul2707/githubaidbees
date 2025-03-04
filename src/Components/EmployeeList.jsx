import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faUsers, faUser, faBriefcase, faIndianRupeeSign, faBuilding, faSearch, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchId, setSearchId] = useState("");
  const employeesPerPage = 5; 


  

  useEffect(() => {
    fetchEmployees();
  }, []);
  

  const fetchEmployees = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/tekbay/getTekbay");
      setEmployees(response.data.data);
    } catch (error) {
      console.error("Error fetching employees:", error.response?.data || error.message);
    }
  };

  const handleSearchChange = (e) => {
    setSearchId(e.target.value);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      try {
        await axios.delete(`http://localhost:8080/api/tekbay/deleteTekbay/${id}`);
        fetchEmployees(); // Refresh list after deletion
      } catch (error) {
        console.error("Error deleting employee:", error.response?.data || error.message);
      }
    }
  };

  const filteredEmployees = searchId
    ? employees.filter((emp) => emp.id.toString() === searchId)
    : employees;

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredEmployees.length / employeesPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="container mt-5 card shadow p-4 rounded">
      <Link to="/signupform" className="btn btn-primary mb-4 fw-bold">
        Add New Employee <FontAwesomeIcon icon={faUserPlus} className="me-2 ms-2" />
      </Link>

      <h2 className="text-center mb-4 bg-warning">
        Employees List - Tekbay <FontAwesomeIcon icon={faUsers} className="me-2" />
      </h2>

      <div className="mb-3 d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search by Employee ID..."
          value={searchId}
          onChange={handleSearchChange}
        />
        <button className="btn btn-primary">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>

      <table className="table table-bordered table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name <FontAwesomeIcon icon={faUser} className="me-2" /></th>
            <th>Designation <FontAwesomeIcon icon={faBriefcase} className="me-2" /></th>
            <th>Salary <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" /></th>
            <th>Branch ID <FontAwesomeIcon icon={faBuilding} className="me-2" /></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.length > 0 ? (
            currentEmployees.map((emp) => (
              <tr key={emp.id}>
                <td>{emp.id}</td>
                <td>{emp.emp_name}</td>
                <td>{emp.designation}</td>
                <td>{emp.salary}</td>
                <td>{emp.branch_id}</td>
                <td>
              <Link 
  to={`/update/${emp.id}`} 
  className="btn btn-warning btn-sm me-2" 
  state={{ 
    employee: {
      id: emp.id,
      emp_name: emp.emp_name,
      designation: emp.designation,
      salary: emp.salary,
      branch_id: emp.branch_id
    }
  }} 
>
  <FontAwesomeIcon icon={faEdit} /> Edit
</Link>


                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(emp.id)}>
                    <FontAwesomeIcon icon={faTrash} /> Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                {searchId ? "No employee found with this ID." : "No employees found."}
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {!searchId && (
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary" onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <span className="fw-bold">Page {currentPage} of {Math.ceil(filteredEmployees.length / employeesPerPage)}</span>
          <button className="btn btn-primary" onClick={nextPage} disabled={currentPage >= Math.ceil(filteredEmployees.length / employeesPerPage)}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default EmployeeList;
