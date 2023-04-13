import React, { useState } from 'react';
import Web3 from 'web3';
import BlockchainButton from './BlockchainButton';
import styled from 'styled-components';

const AccountText = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 16px 0;
`;

const LoginWithMetaMask = () => {
  const [account, setAccount] = useState('');

  const connectToMetamask = async () => {
    // ... (the rest of the connectToMetamask function)
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

export default LoginWithMetaMask;
