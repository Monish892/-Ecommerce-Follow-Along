import React from 'react';

const Login = () => {
  return (
    <div className="loginpage">
      <div className="loginpage2">
        <h1 className="loginpage3">Login</h1>
        <form className='logout'>
          <label className="loginpage4">Email :</label>
          <input
            type="email"
            className="loginpage5"
            placeholder="Enter your email"
          />
          <label className="loginpage6">Password : </label>
          <input
            type="password"
            className="loginpage7"
            placeholder="Enter your password"
          />
          <button
            type="submit"
            className="loginpage8"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
