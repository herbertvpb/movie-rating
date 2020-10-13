import styled from 'styled-components';
import { lighten } from 'polished';

export const SearchForm = styled.form`
  display: flex;
  margin: 64px 16px 0;
  max-width: 560px;

  input {
    flex: 1;
    height: 36px;
    padding: 0 12px;
    border: 0;
    border-radius: 2px 0 0 2px;
  }

  button {
    width: 124px;
    height: 36px;
    background: #083b66;
    border: 0;
    border-radius: 0 2px 2px 0;
    color: #ffffff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${lighten(0.1, '#083b66')};
    }
  }
`;
