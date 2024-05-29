import React, { useState } from "react";
import "./App.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    phoneNumber: "",
    address: "",
    gender: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can add your registration logic, such as sending the form data to a server
    alert(JSON.stringify(formData, null, 2));
    console.log("Form Data:", formData);
    // Reset the form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      age: "",
      phoneNumber: "",
      address: "",
      gender: "",
    });
  };

  return (
    <div className="container mt-4">
      <div className="card">
        <img
          src="https://imgs.search.brave.com/rb94jmU1jfiZtr9oDfskhQ8oagn2O_aWsj-THh1IFtQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvYmVhdXRpZnVs/LWNvb2wtbG5ocDlm/M3R3eXNwbG5qNi5q/cGc"
          alt="logo"
          height="130px"
          className="w-full"
        />
        <div className="card-header text-center">
          <h1>STUDENT REGISTRATION FORM</h1>
        </div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="firstName" className="form-label text-center">
                  <strong>First Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="middleName" className="form-label">
                  <strong>Middle Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  name="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  placeholder="Enter your middle name"
                />
              </div>
              <div className="col">
                <label htmlFor="lastName" className="form-label">
                  <strong>Last Name</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="email" className="form-label">
                  <strong>Email address</strong>
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="age" className="form-label">
                  <strong>Age</strong>
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="Enter your age"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="phoneNumber" className="form-label">
                  <strong>Phone Number</strong>
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="address" className="form-label">
                  <strong>Address</strong>
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="Enter your address"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="gender" className="form-label">
                  <strong>Gender</strong>
                </label>
                <select
                  className="form-select"
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  placeholder="Select gender"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                
                </select>
              </div>
            </div>
            <div className=" row mb-3">
              <div className="col">
                <label htmlFor="password" className="form-label">
                  <strong>Password</strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="col">
                <label htmlFor="confirmPassword" className="form-label">
                  <strong>Confirm Password</strong>
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>
            <div className="row mt-2">
  <div className="col">
    <button type="submit" className="btn btn-outline-primary w-100">
      REGISTER
    </button>
  </div>
  <div className="col">
    <button type="button" className="btn btn-outline-secondary w-100">
      LOGIN
    </button>
  </div>
</div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;
