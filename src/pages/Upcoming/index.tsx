import { SmileyWink, Spinner } from "phosphor-react";
import { UpcomingContainer } from "./styles";

export function Upcoming() {
  return (
    <UpcomingContainer>
      <Spinner size={32} />
      <h1>Upcoming</h1>
      <span>Please come back later</span>
      <SmileyWink size={32} />
    </UpcomingContainer>
  );
}