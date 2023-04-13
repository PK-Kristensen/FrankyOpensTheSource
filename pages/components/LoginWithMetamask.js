// components/LoginWithMetamask.js
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import BlockchainButton from './BlockchainButton';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const AccountText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 16px 0;
`;

const LoginWithMetamask = () => {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const router = useRouter();

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
      router.push('/Dashboard');
    } catch (err) {
      alert('Failed to connect to MetaMask. Please try again.');
    }
  };

  return (
    <div>
      <AccountText>
        {account
          ? `Connected to MetaMask with account: ${account}`
          : 'Connect to MetaMask to continue'}
      </AccountText>
      {!account && (
        <BlockchainButton onClick={connectToMetamask}>Login with MetaMask</BlockchainButton>
      )}
    </div>
  );
};

export default LoginWithMetamask;
