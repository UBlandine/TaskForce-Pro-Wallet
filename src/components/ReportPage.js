import React from "react";

function ReportsPage() {
  return (
    <div>
      <h2>Reports</h2>
      {/* Date Filter */}
      <form>
        <label>Start Date:</label>
        <input type="date" name="start_date" />

        <label>End Date:</label>
        <input type="date" name="end_date" />

        <button type="submit">Generate Report</button>
      </form>

      {/* Reports Table */}
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th>Account</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {/* Replace with dynamic data */}
        </tbody>
      </table>
    </div>
  );
}

export default ReportsPage;
