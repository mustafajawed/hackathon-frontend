import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // Assuming you have the styles in a separate CSS file

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', cnic: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    if (response.ok) {
      alert('Registration successful!');
      navigate('/login');
    } else {
      alert('Registration failed.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="cnic"
            placeholder="CNIC"
            value={formData.cnic}
            onChange={handleChange}
            required
          />
          <button type="submit" className="register-btn">Register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
