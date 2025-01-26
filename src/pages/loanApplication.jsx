import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LoanApplication.css';

const LoanApplication = () => {
  const navigate = useNavigate();

  const handleApplyNow = () => {
    // Navigate to the loan application form, passing the selected category as state
    navigate('/loanapplyform');
  };

  const categories = [
    {
      name: 'Wedding Loans',
      subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'],
      maxLoan: 'PKR 5 Lakh',
      loanPeriod: '3 years',
    },
    {
      name: 'Home Construction Loans',
      subcategories: ['Structure', 'Finishing', 'Loan'],
      maxLoan: 'PKR 10 Lakh',
      loanPeriod: '5 years',
    },
    {
      name: 'Business Startup Loans',
      subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'],
      maxLoan: 'PKR 10 Lakh',
      loanPeriod: '5 years',
    },
    {
      name: 'Education Loans',
      subcategories: ['University Fees', 'Child Fees Loan'],
      maxLoan: 'Based on requirement',
      loanPeriod: '4 years',
    },
  ];

  return (
    <div className="loan-application-container">
      <div className="loan-application-content">
        <h2>Choose Your Loan Category</h2>

        <div className="loan-category-cards">
          {categories.map((category, index) => (
            <div key={index} className="loan-category-card">
              <h3>{category.name}</h3>
              <p><strong>Subcategories:</strong> {category.subcategories.join(', ')}</p>
              <p><strong>Max Loan:</strong> {category.maxLoan}</p>
              <p><strong>Loan Period:</strong> {category.loanPeriod}</p>
              <button className="apply-btn" onClick={() => handleApplyNow()}>
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoanApplication;
