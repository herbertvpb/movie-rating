import styled from 'styled-components';

export const LoaderContainer = styled.div`
  display: flex;
  margin-top: 148px;
  align-items: center;
  justify-content: center;
`;

export const Spinner = styled.div`
  border: 8px solid #083b66;
  border-top: 8px solid #ffffff;
  border-radius: 50%;
  width: 96px;
  height: 96px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
