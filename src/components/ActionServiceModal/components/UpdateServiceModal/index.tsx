// Contextos
import { ServicesContext } from '../../../../contexts/ServicesContext'
import { useContextSelector } from 'use-context-selector'

// React Hook Form
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

// Zod
import * as z from 'zod'

// Styles
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'

import {
  Overlay,
  Content,
  CloseButton,
} from './styles'

const UpdateServiceFormSchema = z.object({
  description: z.string(),
  code: z.string(),
  price: z.number(),
  unity: z.string(),
})

type UpdateServiceFormInputs = z.infer<typeof UpdateServiceFormSchema>

export function UpdateServiceModal() {
  const updateService = useContextSelector(
    ServicesContext,
    (context) => {
      return context.updateService
    },
  )

  const {
    register,
    handleSubmit,
    reset,
  } = useForm<UpdateServiceFormInputs>({
    resolver: zodResolver(UpdateServiceFormSchema),
    defaultValues: {
      description: service.description,
    }
  })

  async function handleUpdateService(data: UpdateServiceFormInputs) {
    const { id, description, code, price, unity } = data
    await updateService()

    reset()

    console.log(data)
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Novo Serviço</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit()}>
          <input
            type="text"
            placeholder="Descrição do serviço"
            required
            {...register('description')}
          />
          <input
            type="text"
            placeholder="Código (gerado automaticamente)"
            disabled
            {...register('code')}
          />
          {/* <input
            type="text"
            placeholder="Código conforme tabela de serviços"
            required
          />
          <input
            type="text"
            placeholder="(disabled) Nomenclatura de serviço"
            disabled
          /> */}
          <input
            type="number"
            placeholder="Preço"
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type="text"
            placeholder="Unidade"
            required
            {...register('unity')}
          />
          {/* <input
            type="text"
            placeholder="(disabled) Observações gerais"
            disabled
          /> */}

          <button type="submit">
            Criar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
