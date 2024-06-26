import React, { useState } from 'react';
import './RegistrationForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const existingUser = JSON.parse(localStorage.getItem(formData.email));

    if (existingUser) {
      if (existingUser.password === formData.password) {
        alert('Login successful!');
      } else {
        alert('Wrong password. Please try again.');
      }
    } else {
      alert('No account found with this email.');
    }
  };

  return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className="btn-submit" type="submit">
          Log In
        </button>
      </form>
  );
};

export default LoginForm;
