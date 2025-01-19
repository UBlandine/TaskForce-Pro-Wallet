import axios from 'axios';

// Set base URL for the API
const API_URL = 'http://localhost:5000/api';

// Function to get all transactions
export const getTransactions = async () => {
  try {
    const response = await axios.get(`${API_URL}/transactions`);
    return response.data;
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return [];
  }
};

// Function to get categories
export const getCategories = async () => {
  try {
    const response = await axios.get(`${API_URL}/categories`);
    return response.data;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
};

// Function to create a new transaction
export const createTransaction = async (transaction) => {
  try {
    const response = await axios.post(`${API_URL}/transactions`, transaction);
    return response.data;
  } catch (error) {
    console.error('Error creating transaction:', error);
  }
};

// Mock implementation of getAccounts
export const getAccounts = async () => {
  // Mock data
  return [
    { _id: '1', name: 'Savings Account', balance: 1000 },
    { _id: '2', name: 'Checking Account', balance: 500 },
  ];
};
