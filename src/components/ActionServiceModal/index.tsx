import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import { CloseButton, Content, Overlay } from './styles'

export function ActionServiceModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Ações</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

      </Content>
    </Dialog.Portal>
  )
}