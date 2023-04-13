import styled from 'styled-components';

const BlockchainButton = styled.button`
  background: linear-gradient(45deg, #f3ec78, #af4261);
  border: none;
  border-radius: 50px;
  color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  padding: 12px 24px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  &:hover {
    background: linear-gradient(45deg, #af4261, #f3ec78);
  }
`;

export default BlockchainButton;
