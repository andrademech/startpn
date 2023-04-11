import { Check, DotsThreeVertical } from "phosphor-react";
import { Options, ServicesContainer, ServicesList } from "./styles";

import { useContextSelector } from "use-context-selector";
import { ServicesContext } from "../../../../contexts/ServicesContext";
import { priceFormatter } from "../../../../utils/formatter";

import * as Dialog from "@radix-ui/react-dialog";
import { ActionServiceModal } from "../../../../components/ActionServiceModal";

export function Services() {
  const services = useContextSelector(ServicesContext, (context) => {
    return context.services
  })

  return (
    <ServicesContainer>
      <ServicesList>
        <table>
          <thead>
            <tr>
              <th>Descrição do serviço</th>
              <th>Código</th>
              <th>Unidade</th>
              <th>Preço</th>
              <th>

                <Dialog.Root>
                  <Dialog.Trigger asChild>
                    <Options>
                      <DotsThreeVertical size={32} />
                    </Options>
                  </Dialog.Trigger>

                  <ActionServiceModal />
                </Dialog.Root>
              </th>
            </tr>
          </thead>

          <tbody>
            {services.map(service => {
              return (
                <tr key={service.id}>
                  <td>{service.description}</td>
                  <td>{service.code}</td>
                  <td>{service.unity}</td>
                  <td>
                    {priceFormatter.format(service.price)}
                  </td>
                  <td>
                    <Options>
                      <DotsThreeVertical size={32} />
                    </Options>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </ServicesList>
    </ServicesContainer>
  )
}
