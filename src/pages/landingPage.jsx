import './landingPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Wedding Loans', subcategories: ['Valima', 'Furniture', 'Valima Food', 'Jahez'], maxLoan: 500000, loanPeriod: '3 years' },
    { name: 'Home Construction Loans', subcategories: ['Structure', 'Finishing', 'Loan'], maxLoan: 1000000, loanPeriod: '5 years' },
    { name: 'Business Startup Loans', subcategories: ['Buy Stall', 'Advance Rent for Shop', 'Shop Assets', 'Shop Machinery'], maxLoan: 1000000, loanPeriod: '5 years' },
    { name: 'Education Loans', subcategories: ['University Fees', 'Child Fees Loan'], maxLoan: 'Based on requirements', loanPeriod: 'Varies' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSubcategory, setSelectedSubcategory] = useState('');
  const [initialDeposit, setInitialDeposit] = useState('');
  const [loanPeriod, setLoanPeriod] = useState('');
  const [estimatedLoan, setEstimatedLoan] = useState(null);

  const handleProceedClick = () => {
    navigate('/register');  // Redirect to the Register page when Proceed is clicked
  };

  const handleCalculate = () => {
    // Simple loan calculation logic
    const principal = parseFloat(initialDeposit);
    const rate = 0.05; // 5% interest rate
    const time = parseInt(loanPeriod);
    const interest = principal * rate * time;
    const totalAmount = principal + interest;
    setEstimatedLoan(totalAmount);
  };

  const selectedCategoryDetails = categories.find(cat => cat.name === selectedCategory);

  return (
    <div className="landing-page-container">
      <h1>Welcome to Saylani Microfinance</h1>
      <button onClick={handleProceedClick} className="proceed-button">
        Proceed
      </button>

      <h2>Loan Categories</h2>
      <div className="categories-container">
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h3>{category.name}</h3>
            <ul>
              {category.subcategories.map((subcategory, subIndex) => (
                <li key={subIndex}>{subcategory}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <h2>Loan Calculator</h2>
      <div className="calculator-container">
        <div className="form-group">
          <label>Category</label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Subcategory</label>
          <select
            value={selectedSubcategory}
            onChange={(e) => setSelectedSubcategory(e.target.value)}
            disabled={!selectedCategory}
          >
            <option value="">Select Subcategory</option>
            {selectedCategory &&
              categories
                .find((cat) => cat.name === selectedCategory)
                .subcategories.map((subcategory, index) => (
                  <option key={index} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
          </select>
        </div>
        <div className="form-group">
          <label>Initial Deposit</label>
          <input
            type="number"
            value={initialDeposit}
            onChange={(e) => setInitialDeposit(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Loan Period (years)</label>
          <input
            type="number"
            value={loanPeriod}
            onChange={(e) => setLoanPeriod(e.target.value)}
          />
        </div>
        <button onClick={handleCalculate} className="calculate-button">
          Calculate
        </button>
        {estimatedLoan !== null && (
          <div className="estimated-loan">
            <h3>Estimated Loan Breakdown</h3>
            <p>Total Amount: ${estimatedLoan.toFixed(2)}</p>
          </div>
        )}
        {selectedCategoryDetails && (
          <div className="category-details">
            <p><strong>Maximum Loan:</strong> {selectedCategoryDetails.maxLoan}</p>
            <p><strong>Loan Period:</strong> {selectedCategoryDetails.loanPeriod}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;