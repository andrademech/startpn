import styled from "styled-components";


export const SidebarContainer = styled.aside`
  display: flex;
  flex-direction: column;
  min-width: 14.3rem;
  border-radius: 8px;
  padding: 1rem;

  align-items: center;
  background: ${(props) => props.theme['gray-800']};

  gap: 1rem;
  border-right: 1px solid ${(props) => props.theme['gray-700']};

  img {
    margin: 2.875rem auto;
    &:hover {
      cursor: pointer;
    }
  }
`

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;

  width: 100%;

  a{
    text-decoration: none;
    width: 100%;
  }
`

interface NavItemProps {
  active?: boolean;
}

export const ServicesContent = styled.button<NavItemProps>`
  display: flex;
  width: 100%;
  height: 2.45rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  gap: 1rem;

  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  cursor: pointer;

  transition: background ease-in-out 0.2s;

  &:hover {
    background: ${(props) => props.theme.blue};
  }

`

export const ExitButton = styled.button`
  display: flex;
  width: 100%;
  height: 2.45rem;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5rem;
  margin-top: 10rem;
  gap: 1rem;

  border-radius: 8px;
  background: ${(props) => props.theme['gray-700']};
  color: ${(props) => props.theme['gray-100']};
  border: 0;
  transition: background ease-in-out 0.2s;
  cursor: pointer;

  &:focus {
    box-shadow: none;
  }

  &:hover {
    background: ${(props) => props.theme["red-500"]};
  }

`