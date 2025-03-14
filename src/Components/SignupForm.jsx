import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faBriefcase, faIndianRupeeSign, faBuilding, faIdCard } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";
import "../App.css";

const SignupForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    emp_name: "",
    designation: "",
    salary: "",
    branch_id: "",
  });

  const location = useLocation();
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [salaryError, setSalaryError] = useState("");

  // Load existing employee data if available
  useEffect(() => {
    if (location.state?.employee) {
      setFormData(location.state.employee);
    }
  }, [location]);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "salary") {
      console.log(`Salary Input Changed: ${value}`); // ✅ Logs salary changes

      const salaryValue = parseFloat(value) || 0;
      setSalaryError(salaryValue < 10000 ? "Salary must be at least ₹10,000." : "");
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form validation before submission
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

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting || !validateForm()) return;
    setIsSubmitting(true);

    const formattedData = {
      emp_name: formData.emp_name.trim(),
      designation: formData.designation,
      salary: parseFloat(formData.salary),
      branch_id: parseInt(formData.branch_id, 10),
    };

    console.log("Submitting Data:", formattedData); // ✅ Logs submitted data

    try {
      const response = await axios.post("http://localhost:8080/api/tekbay/postTekbay", formattedData);
      console.log("Response Received:", response.data); // ✅ Logs API response

      setResponseMessage(response.data?.message || "User added successfully!");
      setFormData({ id: "", emp_name: "", designation: "", salary: "", branch_id: "" });
    } catch (error) {
      console.error("Error submitting:", error.response?.data || error.message);
      setResponseMessage(error.response?.data?.message || "Error while adding the user.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4 p-1 bg-warning text-dark rounded shadow fw-bold">
        Employee Details <FontAwesomeIcon icon={faIdCard} className="me-2" />
      </h2>

      <form className="card p-4">
        {/* Employee Name */}
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

        {/* Designation */}
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

        {/* Salary */}
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
            min="10000"
          />
          {salaryError && <small className="text-danger">{salaryError}</small>}
        </div>

        {/* Branch ID */}
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

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100 fw-bold" onClick={handleSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>

      {/* Display API Response */}
      {responseMessage && <div className="alert alert-info mt-4">{responseMessage}</div>}
    </div>
  );
};

export default SignupForm;
