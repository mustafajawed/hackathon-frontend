import React, { useState } from 'react';
import './LoanApplyForm.css';
// import {QRCode} from 'qrcode.react';

const LoanApplyForm = () => {
  const [formData, setFormData] = useState({
    subcategory: '',
    category: '',
    address: '',
    phoneNumber: '',
    guarantor1Name: '',
    guarantor1Email: '',
    guarantor1Location: '',
    guarantor1Cnic: '',
    guarantor2Name: '',
    guarantor2Email: '',
    guarantor2Location: '',
    guarantor2Cnic: '',
    statement: null,
    salarySheet: null,
  });

  const [slipData, setSlipData] = useState(null);

  const categories = [
    { name: 'Personal Loan', maxLoan: 50000, loanPeriod: '5 years' },
    { name: 'Home Loan', maxLoan: 200000, loanPeriod: '20 years' },
    { name: 'Car Loan', maxLoan: 30000, loanPeriod: '7 years' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    const response = { ok: true }; // Replace with actual form submission logic
    if (response.ok) {
      generateSlip();
    } else {
      alert("Loan application failed.");
    }
  };

  const generateSlip = () => {
    const tokenNumber = Math.floor(Math.random() * 1000000);
    const appointmentDetails = {
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      officeLocation: '123 Main St, City, Country',
    };
    setSlipData({ tokenNumber, appointmentDetails });
  };

  const downloadSlip = () => {
    const slipElement = document.getElementById('slip');
    const slipHtml = slipElement.outerHTML;
    const blob = new Blob([slipHtml], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'loan_application_slip.html';
    link.click();
  };

  const selectedCategory = categories.find(cat => cat.name === formData.category);

  return (
    <div className="loan-apply-form-container">
      <div className="loan-apply-form-content">
        <h2>Loan Application Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              {categories.map((category, index) => (
                <option key={index} value={category.name}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
          {selectedCategory && (
            <>
              <p><strong>Max Loan Amount:</strong> ${selectedCategory.maxLoan}</p>
              <p><strong>Loan Period:</strong> {selectedCategory.loanPeriod}</p>
            </>
          )}
          <div className="form-group">
            <label>Subcategory</label>
            <input
              type="text"
              name="subcategory"
              value={formData.subcategory}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </div>
          <h3>Guarantor 1 Information</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="guarantor1Name"
              value={formData.guarantor1Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="guarantor1Email"
              value={formData.guarantor1Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="guarantor1Location"
              value={formData.guarantor1Location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CNIC</label>
            <input
              type="text"
              name="guarantor1Cnic"
              value={formData.guarantor1Cnic}
              onChange={handleChange}
              required
            />
          </div>
          <h3>Guarantor 2 Information</h3>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="guarantor2Name"
              value={formData.guarantor2Name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="guarantor2Email"
              value={formData.guarantor2Email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Location</label>
            <input
              type="text"
              name="guarantor2Location"
              value={formData.guarantor2Location}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>CNIC</label>
            <input
              type="text"
              name="guarantor2Cnic"
              value={formData.guarantor2Cnic}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Statement (optional)</label>
            <input
              type="file"
              name="statement"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div className="form-group">
            <label>Salary Sheet (optional)</label>
            <input
              type="file"
              name="salarySheet"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {slipData && (
          <div id="slip" className="slip">
            <h3>Loan Application Slip</h3>
            <p><strong>Token Number:</strong> {slipData.tokenNumber}</p>
            <QRCode value={`Token Number: ${slipData.tokenNumber}`} />
            <p><strong>Appointment Details:</strong></p>
            <p>Date: {slipData.appointmentDetails.date}</p>
            <p>Time: {slipData.appointmentDetails.time}</p>
            <p>Office Location: {slipData.appointmentDetails.officeLocation}</p>
            <button onClick={downloadSlip}>Download Slip</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoanApplyForm;