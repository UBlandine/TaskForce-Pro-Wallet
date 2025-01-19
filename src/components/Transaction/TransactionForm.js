import React, { useState, useEffect } from 'react';
import { createTransaction } from '../../utils/api';
import { getCategories } from '../../utils/api';

const TransactionForm = () => {
  const [categories, setCategories] = useState([]);
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [account, setAccount] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriesData = await getCategories();
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const transaction = {
      amount,
      category,
      account,
      description,
      type: amount > 0 ? 'income' : 'expense',
    };

    const response = await createTransaction(transaction);
    if (response) {
      alert('Transaction added successfully');
      // Reset form
      setAmount('');
      setCategory('');
      setAccount('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Transaction</h2>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
        required
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} required>
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </select>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <button type="submit">Add Transaction</button>
    </form>
  );
};

export default TransactionForm;
