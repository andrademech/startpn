import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 74rem;
  min-height: 50rem;
  margin: 2rem auto;
  padding: 0 1rem 0 0;

  border-radius: 8px;

  background: ${(props) => props.theme['gray-800']};
  display: flex;
`
