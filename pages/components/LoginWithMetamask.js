import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

const LoginWithMetamask = () => {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    if (window.ethereum) {
      const web3Instance = new Web3(window.ethereum);
      setWeb3(web3Instance);
    } else {
      alert('Please install MetaMask to use this feature.');
    }
  }, []);

  const connectToMetamask = async () => {
    if (!web3) {
      alert('MetaMask not found. Please install the extension.');
      return;
    }

    try {
      const accounts = await web3.eth.requestAccounts();
      setAccount(accounts[0]);
    } catch (err) {
      alert('Failed to connect to MetaMask. Please try again.');
    }
  };

  return (
    <div>
      <p>
        {account
          ? `Connected to MetaMask with account: ${account}`
          : 'Connect to MetaMask to continue'}
      </p>
      {!account && (
        <button onClick={connectToMetamask}>Login with MetaMask</button>
      )}
    </div>
  );
};

export default LoginWithMetamask;
