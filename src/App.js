import React, { useState } from 'react';
import './App.css';

function App() {
  const [isRegister, setIsRegister] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handle login form submit
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target.loginEmail.value;
    const password = event.target.loginPassword.value;
    alert(`Logged in with: Email - ${email}, Password - ${password}`);
    setIsLoggedIn(true); // Set logged in state
  };

  // Handle registration form submit
  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.regEmail.value;
    const phone = event.target.phone.value;
    const password = event.target.regPassword.value;
    alert(`Registered with: Name - ${firstName} ${lastName}, Email - ${email}, Phone - ${phone}, Password - ${password}`);
  };

  // Handle logout
  const handleLogout = () => {
    setIsLoggedIn(false); // Reset logged in state
    alert('Logged out successfully!');
  };

  // Toggle form between login and register
  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <div>
          <h2>Welcome!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : isRegister ? (
        <form onSubmit={handleRegisterSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input type="text" id="firstName" placeholder="Enter your first name" required />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" placeholder="Enter your last name" required />
          </div>
          <div className="form-group">
            <label htmlFor="regEmail">Email</label>
            <input type="email" id="regEmail" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="tel" id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="form-group">
            <label htmlFor="regPassword">Password</label>
            <input type="password" id="regPassword" placeholder="Create a password" required />
          </div>
          <button type="submit">Register</button>
          <span className="toggle-link" onClick={toggleForm}>
            Already have an account? Login
          </span>
        </form>
      ) : (
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="loginEmail">Email</label>
            <input type="email" id="loginEmail" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="loginPassword">Password</label>
            <input type="password" id="loginPassword" placeholder="Enter your password" required />
          </div>
          <button type="submit">Login</button>
          <span className="toggle-link" onClick={toggleForm}>
            Don't have an account? Register
          </span>
        </form>
      )}
    </div>
  );
}

export default App;
