import { lighten } from 'polished';
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
  justify-content: space-between;

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

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 18px;

  ul {
    margin-top: 12px;
    list-style: none;

    li {
      display: flex;
      justify-content: space-between;
      padding: 14px;
      border-bottom: 1px solid #e68328;
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 148px;
    height: 36px;
    text-decoration: none;
    color: #083b66;
  }

  button {
    width: 100%;
    height: 36px;
    background: #e68328;
    border: 0;
    border-radius: 0 2px 2px 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${lighten(0.1, '#e68328')};
    }
  }
`;
