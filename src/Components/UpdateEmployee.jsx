import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faIndianRupeeSign, faBuilding, faEdit } from '@fortawesome/free-solid-svg-icons';

const UpdateEmployee = () => {
  const [formData, setFormData] = useState({
    id: "",
    emp_name: "",
    designation: "",
    salary: "",
    branch_id: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [salaryError, setSalaryError] = useState("");

  // Load employee data when the component mounts
  useEffect(() => {
    if (location.state?.employee) {
      setFormData(location.state.employee);
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "salary") {
      const salaryValue = parseFloat(value) || 0;
      setSalaryError(salaryValue < 10000 ? "Salary must be at least ₹10,000." : "");
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.emp_name || !formData.designation || !formData.salary || !formData.branch_id) {
      setResponseMessage("All fields are required.");
      return false;
    }
    if (parseFloat(formData.salary) < 10000) {
      setSalaryError("Salary must be at least ₹10,000.");
      return false;
    }
    return true;
  };

const handleUpdate = async (e) => {
  e.preventDefault();
  if (isSubmitting || !validateForm()) return;
  setIsSubmitting(true);

  const updateData = {
    emp_name: formData.emp_name.trim(),
    designation: formData.designation,
    salary: parseFloat(formData.salary),
    branch_id: parseInt(formData.branch_id, 10),
  };

  try {
    console.log("🔹 Sending PATCH request with data:", updateData);

    const response = await axios.patch(
      `http://localhost:8080/api/tekbay/updateTek/${formData.id}`,
      updateData,
      {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true, // ⬅️ Add this if your backend requires authentication
      }
    );

    console.log("✅ Update Success:", response.data);
    setResponseMessage(response.data?.message || "Employee updated successfully!");

    setTimeout(() => {
      navigate("/");
    }, 1500);
  } catch (error) {
    console.error("❌ Error updating:", error);
    setResponseMessage(error.response?.data?.message || "Error while updating the employee.");
  } finally {
    setIsSubmitting(false);
  }
};



  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 p-1 bg-warning text-dark rounded shadow fw-bold">
        Update Employee <FontAwesomeIcon icon={faEdit} className="me-2" />
      </h2>
      <form className="card p-4">
        <div className="mb-3">
          <label htmlFor="id" className="form-label fw-bold">
            Employee ID (Read-Only)
          </label>
          <input
            type="number"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            readOnly
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emp_name" className="form-label fw-bold">
            Employee Name <FontAwesomeIcon icon={faUser} className="me-2" />
          </label>
          <input
            type="text"
            className="form-control"
            id="emp_name"
            name="emp_name"
            value={formData.emp_name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="designation" className="form-label fw-bold">
            Designation <FontAwesomeIcon icon={faBriefcase} className="me-2" />
          </label>
          <select
            className="form-control"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select Designation</option>
            <option value="Android Developer">Android Developer</option>
            <option value="iOS Developer">iOS Developer</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Fullstack Developer">Fullstack Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
          </select>
        </div>

        <div className="mb-3">
          <label htmlFor="salary" className="form-label fw-bold">
            Salaries <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" />
          </label>
          <input
            type="number"
            className="form-control"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
            min="10000"
          />
          {salaryError && <small className="text-danger">{salaryError}</small>}
        </div>

        <div className="mb-3">
          <label htmlFor="branch_id" className="form-label fw-bold">
            Branch ID <FontAwesomeIcon icon={faBuilding} className="me-2" />
          </label>
          <input
            type="number"
            className="form-control"
            id="branch_id"
            name="branch_id"
            value={formData.branch_id}
            onChange={handleChange}
            required
       
          />
        </div>

        <button type="submit" className="btn btn-success w-100 fw-bold" onClick={handleUpdate} disabled={isSubmitting}>
          {isSubmitting ? "Updating..." : "Update"}
        </button>
      </form>

      {responseMessage && <div className="alert alert-info mt-4">{responseMessage}</div>}
    </div>
    
  );
};

export default UpdateEmployee;
