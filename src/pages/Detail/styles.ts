import styled from 'styled-components';

export const MovieContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px;

  img {
    width: 320px;
    height: 560px;
    border-radius: 12px 0 0 12px;
    object-fit: cover;
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  flex: 1;
  padding: 16px 24px;
  flex-direction: column;
  background: #ffffff;
  border-radius: 0 12px 12px 0;

  p,
  h3 {
    margin-top: 8px;
  }
`;

export const InfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    font-size: 24px;
    color: #e68328;
  }
`;
