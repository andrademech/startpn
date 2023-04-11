import styled from 'styled-components'


export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border-radius: 60px;
    border: 0;
    background: ${(props) => props.theme['gray-900']};
    color: ${(props) => props.theme['gray-300']};
    padding: 0.5rem 1.5rem;

    &::placeholder {
      margin-left: 1rem;
      color: ${(props) => props.theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${(props) => props.theme.blue};
    color: ${(props) => props.theme.blue};
    font-weight: bold;
    border-radius: 60px;
    cursor: pointer;

    &:not(:disabled)hover {
      background: ${(props) => props.theme.blue};
      border-color: ${(props) => props.theme.blue};
      color: ${(props) => props.theme.white};
      transition: background-color 0.2s, color 0.2, border-color 0.2s;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`
