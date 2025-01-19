import React, { useEffect, useState } from 'react';
import { getTransactions } from '../utils/api';

const TransactionList = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const transactionsData = await getTransactions();
      setTransactions(transactionsData);
    };

    fetchData();
  }, []);

  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th>Amount</th>
            <th>Date</th>
            <th>Account</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr key={transaction._id}>
              <td>{transaction.amount}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
              <td>{transaction.account.name}</td>
              <td>{transaction.category ? transaction.category.name : 'Uncategorized'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
