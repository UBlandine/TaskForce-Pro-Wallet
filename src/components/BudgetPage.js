import React from "react";

 function BudgetPage() {
  return (
    <div>
      <h2>Budget</h2>
      {/* Budget Form */}
      <form>
        <label>Budget Limit:</label>
        <input type="number" name="budget" required />
        <button type="submit">Set Budget</button>
      </form>

      {/* Display Budget Status */}
      <p>Current Budget: $1000</p>
      <p>Expenses: $750</p>
      <p>Status: Within Budget</p>
    </div>
  );
}


export default BudgetPage;
