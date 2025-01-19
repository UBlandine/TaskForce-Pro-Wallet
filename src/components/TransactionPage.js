import React, { useState } from "react";

// 1. Transactions Page
function TransactionPage() {
  return (
    <div>
      <h2>Transactions</h2>
      {/* Form to add transactions */}
      <form>
        <label>Amount:</label>
        <input type="number" name="amount" required />

        <label>Type:</label>
        <select name="type">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>

        <label>Account:</label>
        <select name="account">
          <option value="bank">Bank</option>
          <option value="mobile">Mobile Money</option>
          <option value="cash">Cash</option>
        </select>

        <label>Category:</label>
        <select name="category">
          <option value="food">Food</option>
          <option value="rent">Rent</option>
          <option value="other">Other</option>
        </select>

        <button type="submit">Add Transaction</button>
      </form>

      {/* Transactions Table */}
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
          <tr>
            <td>2025-01-18</td>
            <td>$100</td>
            <td>Income</td>
            <td>Bank</td>
            <td>Salary</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
 
export default TransactionPage;
