import React from 'react';
import { useNavigate } from 'react-router-dom';


const Login = () => {


  const navigate=useNavigate();

  const handlelogin=(event)=>{

    event.preventDefault();
    console.log('login logic exceuted');

    navigate('/')
    


  }







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
          <button type="submit" className="submit-button" onClick={handlelogin}>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
