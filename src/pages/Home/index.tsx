import { HomeContainer, NewServiceButton, SubHeader } from "./styles";

import * as Dialog from "@radix-ui/react-dialog";

import { Services } from "./components/Services";
import { Header } from "./components/Header";
import { SearchForm } from "./components/SearchForm";
import { NewServiceModal } from "../../components/NewServiceModal";

export function Home() {
  return (
    <HomeContainer>

      <Header />

      <SubHeader>
        <SearchForm />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewServiceButton>
              Novo serviço
            </NewServiceButton>
          </Dialog.Trigger>

          <NewServiceModal />
        </Dialog.Root>
      </SubHeader>

      <Services />
    </HomeContainer>
  )
}
