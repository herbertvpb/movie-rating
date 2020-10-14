import styled from 'styled-components';

export const CardContainer = styled.a`
  display: flex;
  flex-direction: column;
  width: 280px;
  height: 560px;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-10px);
  }

  img {
    width: 100%;
    height: 90%;
    border-radius: 12px 12px 0 0;
    object-fit: cover;
  }
`;

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex: 1;
  background: #083b66;
  border-radius: 0 0 12px 12px;

  strong {
    font-size: 18px;
    color: #ffffff;
  }
`;
