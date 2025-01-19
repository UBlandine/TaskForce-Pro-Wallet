// App.js
import React from 'react';
import AccountOverview from './components/account/AccountOverview';
import TransactionList from './components/Transaction/TransactionList';
import TransactionForm from './components/Transaction/TransactionForm';
import BudgetTracker from './components/Budget/BudgetTracker';
import ReportGenerator from './components/Report/ReportGenerator';

function App() {
  return (
    <div className="App">
      <h1>Eric's Finance Dashboard</h1>
      <AccountOverview />
      <TransactionForm />
      <TransactionList />
      <BudgetTracker />
      <ReportGenerator /> 
    </div>
  );
}

export default App;
