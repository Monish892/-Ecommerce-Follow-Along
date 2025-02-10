

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './signup.css';

const SignupForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = 'Username is required.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email address.';
    }

    if (!formData.password.trim()) {
      newErrors.password = 'Password is required.';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlesignup = (event) => {
    event.preventDefault();

    if (validateForm()) {
      console.log('Sign-up logic executed');
      navigate('/login');
    } else {
      console.log('Validation failed');
    }
  };

  return (
    <form onSubmit={handlesignup} className="signup-form">
      <h1 className="form-title">Sign Up</h1>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          className={errors.username ? 'input-error' : ''}
        />
        {errors.username && <p className="error-message">{errors.username}</p>}
      </div>
      <div className="form-group">
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={errors.email ? 'input-error' : ''}
        />
        {errors.email && <p className="error-message">{errors.email}</p>}
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          className={errors.password ? 'input-error' : ''}
        />
        {errors.password && <p className="error-message">{errors.password}</p>}
      </div>
      <button type="submit" className="submit-button">Sign Up</button>
    </form>
  );
};

export default SignupForm;

