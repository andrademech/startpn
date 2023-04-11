import styled from 'styled-components'

export const UpcomingContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  flex-direction: column;

  svg:first-child {
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
