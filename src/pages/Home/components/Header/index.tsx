import { CaretDown } from "phosphor-react";
import { HeaderContainer, ProfileContainer } from "./styles";

import profileImage from '../../../../assets/profile-image.png'

export function Header() {
  return (
    <HeaderContainer>
      <h2>Serviços</h2>
      <ProfileContainer>
        <img src={profileImage} alt="" />
        <span>Herberth Andrade</span>
        <CaretDown size={20} />
      </ProfileContainer>
    </HeaderContainer>
  )
}
