import React from 'react';


const Login = () => {
  return (
    <div className="login-container">
      <div className="login-form">
        <h1 className="title">Login</h1>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="input-field"
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              required
              placeholder="Enter your password"
              className="input-field"
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
