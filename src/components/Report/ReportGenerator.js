// ReportGenerator.js
import React, { useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const ReportGenerator = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateReport = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/report', {
        startDate,
        endDate,
      });

      setReport(response.data);
    } catch (err) {
      setError('Failed to generate report. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="report-generator">
      <h2>Generate Report</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleGenerateReport();
        }}
      >
        <div>
          <label>Start Date: </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>End Date: </label>
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Generating...' : 'Generate Report'}
        </button>
      </form>

      {error && <p className="error">{error}</p>}

      {report && (
        <div className="report-summary">
          <h3>Report Summary</h3>
          <p>
            <strong>Total Income:</strong> ${report.income}
          </p>
          <p>
            <strong>Total Expenses:</strong> ${report.expenses}
          </p>
          <p>
            <strong>Net Balance:</strong> ${report.netBalance}
          </p>

          <h4>Transactions</h4>
          <ul>
            {report.transactions.map((transaction) => (
              <li key={transaction._id}>
                <strong>{transaction.type}</strong>: ${transaction.amount} (
                {moment(transaction.date).format('MMMM Do YYYY, h:mm:ss a')})
                <br />
                Category: {transaction.category ? transaction.category.name : 'Uncategorized'}
                <br />
                Description: {transaction.description}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ReportGenerator;
