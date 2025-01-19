import React, { useEffect, useState } from 'react';
import { getAccounts } from '../../utils/api';

const AccountOverview = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Fetch account data on component mount
    const fetchData = async () => {
      const accountsData = await getAccounts();
      setAccounts(accountsData);
    };

    fetchData();
  }, []);

  return (
    <div className="account-overview">
      <h2>Account Overview</h2>
      <div className="account-cards">
        {accounts.map((account) => (
          <div className="account-card" key={account._id}>
            <h3>{account.name}</h3>
            <p>Balance: ${account.balance}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountOverview;
