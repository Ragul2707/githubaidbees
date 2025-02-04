
import React, { useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBriefcase, faIndianRupeeSign, faBuilding, faIdCard } from '@fortawesome/free-solid-svg-icons';
import '../App.css';
const SignupForm = () => {
  const [formData, setFormData] = useState({
    emp_name: "",
    designation: "",
    salary: "",
    branch_id: "",
  });

  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent duplicate submissions

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return; 
    setIsSubmitting(true);

    const formattedData = {
      emp_name: formData.emp_name.trim(),
      designation: formData.designation.trim(),
      salary: parseFloat(formData.salary) || 0, 
      branch_id: parseInt(formData.branch_id, 10) || 0, 
    };

    console.log("Submitting Data:", formattedData);

    try {
      const response = await axios.post("http://localhost:8080/api/tekbay/postTekbay", formattedData);

      console.log("Response received:", response.data);

      setResponseMessage(response.data?.message || "User added successfully!");
      setFormData({ emp_name: "", designation: "", salary: "", branch_id: "" }); // Clear form after submission
    } catch (error) {
      console.error("Error during POST request:", error);

      setResponseMessage(
        error.response?.data?.message || "Error while adding the user."
      );
    } finally {
      setIsSubmitting(false); // Reset submission state
    }
  };

  return (
    <div className="container mt-5">
      <h2 style={{backgroundColor:"orange"}} className="text-center mb-4 p-1 bg-gradient text-dark rounded shadow fw-bold">
        Employee Details <FontAwesomeIcon icon={faIdCard} className="me-2" />
      </h2>
      <form className="card p-4" onSubmit={handleSubmit}>
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
          <input
            type="text"
            className="form-control"
            id="designation"
            name="designation"
            value={formData.designation}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="salary" className="form-label fw-bold">
            Salary <FontAwesomeIcon icon={faIndianRupeeSign} className="me-2" />
          </label>
          <input
            type="number"
            className="form-control"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            required
          />
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
        <button type="submit" className="btn btn-primary w-100 fw-bold" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
      {responseMessage && (
        <div className="alert alert-info mt-4">{responseMessage}</div>
      )}
    </div>
  );
};

export default SignupForm;
