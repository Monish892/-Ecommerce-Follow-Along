import React, { useState } from "react";
import "./signUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      alert("Sign-Up Successful!");
      console.log("Submitted Data:", formData);

      setFormData({ name: "", email: "", password: "" });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="signup-container">
    <h1>Sign Up</h1>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />
        {errors.name && <small className="error-message">{errors.name}</small>}
      </div>
  
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
        {errors.email && <small className="error-message">{errors.email}</small>}
      </div>
  
      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter a strong password"
        />
        {errors.password && (
          <small className="error-message">{errors.password}</small>
        )}
      </div>
  
      {/* New File Input for Profile Picture */}
      <div className="form-group">
        <label htmlFor="profilePicture">Profile Picture</label>
        <input
          type="file"
          id="profilePicture"
          name="profilePicture"
          accept="image/*" 
          onChange={handleChange}
        />
        {errors.profilePicture && (
          <small className="error-message">{errors.profilePicture}</small>
        )}
      </div>

      
  
      <button type="submit">Register</button>
    </form>
  </div>
  
  );
};

export default SignUp;
