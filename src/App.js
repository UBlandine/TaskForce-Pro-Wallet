import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TransactionPage from "./TransactionPage";
import ReportsPage from "./ReportsPage";
import BudgetPage from "./BudgetPage";
import SettingsPage from "./SettingsPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/transactions">Transactions</Link></li>
          <li><Link to="/reports">Reports</Link></li>
          <li><Link to="/budget">Budget</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/transactions" element={<TransactionPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/budget" element={<BudgetPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
