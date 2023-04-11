import { Chat, List, ListBullets, Nut, Scroll, SignOut, User, Wrench } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { ExitButton, NavContainer, ServicesContent, SidebarContainer } from "./styles";

import SuaLogo from '../../assets/sua-logo.svg'
import { useState } from "react";

export function Sidebar() {
  const [active, setActive] = useState(false);

  function handleButtonClick() {
    setActive(!active);
  }

  return (
    <SidebarContainer>
      <img src={SuaLogo} alt="" />

      <NavContainer>

        <NavLink to="/" title="services">
          <ServicesContent>
            <Wrench size={24} />
            <span>Serviços</span>
          </ServicesContent>
        </NavLink>

        <NavLink to="/upcoming" title="exemplo">
          <ServicesContent>
            <ListBullets size={24} />
            <span>Exemplo</span>
          </ServicesContent>
        </NavLink>

        <NavLink to="/upcoming" title="example">
          <ServicesContent>
            <Chat size={24} />
            <span>Exemplo</span>
          </ServicesContent>
        </NavLink>

        <NavLink to="/upcoming" title="example">
          <ServicesContent>
            <Nut size={24} />
            <span>Exemplo</span>
          </ServicesContent>
        </NavLink>

        <NavLink to="/upcoming" title="account">
          <ServicesContent>
            <User size={24} />
            <span>Minha conta</span>
          </ServicesContent>
        </NavLink>

      </NavContainer>

      <ExitButton>
        <SignOut size={24} />
        <span>Sair</span>
      </ExitButton>
    </SidebarContainer >
  );
}