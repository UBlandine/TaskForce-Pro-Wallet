import React, { useState } from 'react';

const BudgetTracker = () => {
  const [budget, ] = useState(1000); // Static for now, could be fetched from backend
  const [spent, ] = useState(200); // Static for now, should be calculated dynamically

  const percentageSpent = (spent / budget) * 100;

  return (
    <div className="budget-tracker">
      <h2>Budget Tracker</h2>
      <p>Monthly Budget: ${budget}</p>
      <p>Spent: ${spent}</p>
      <div className="progress-bar">
        <div style={{ width: `${percentageSpent}%` }} className="progress"></div>
      </div>
      <p>{percentageSpent}% of your budget spent</p>
    </div>
  );
};

export default BudgetTracker;
