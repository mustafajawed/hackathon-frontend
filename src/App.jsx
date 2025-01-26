import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landingPage';
import Register from './pages/register';
import Login from './pages/Login';
import LoanApplication from './pages/loanApplication';
import LoanApplyForm from './pages/loanApplyForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/apply-loan" element={<LoanApplication />} />
        <Route path="/loanapplyform" element={<LoanApplyForm/>} />
        {/* <Route path="/admin" element={<adminDashboard />} /> */}
      </Routes>
    </Router>
  );
}

export default App;