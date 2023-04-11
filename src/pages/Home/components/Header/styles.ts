import styled from "styled-components"

export const HeaderContainer = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 2.5rem;
  color: ${(props) => props.theme['gray-100']};
`

export const ProfileContainer = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  border: 1px solid ${props => props.theme['gray-600']};
  padding: 0.2rem;
  gap: 0.75rem;

  border-radius: 60px;

  img {
    width: 40px;
    border-radius: 50%;
    cursor: pointer;
  }

  span {
    font-size: 0.75rem;
  }

  svg {
    margin: 0 1rem;
    cursor: pointer;
  }
`