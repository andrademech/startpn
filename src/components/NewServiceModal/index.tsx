// Contextos
import { ServicesContext } from '../../contexts/ServicesContext'
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

const NewServiceFormSchema = z.object({
  description: z.string().min(3),
  code: z.string(),
  unity: z.string(),
  price: z.number(),
})

type NewServiceFormInputs = z.infer<typeof NewServiceFormSchema>

export function NewServiceModal() {
  const createService = useContextSelector(
    ServicesContext,
    (context) => {
      return context.createService
    },
  )

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewServiceFormInputs>({
    resolver: zodResolver(NewServiceFormSchema),
  })

  async function handleCreateNewService(data: NewServiceFormInputs) {
    const { description, code, price, unity } = data
    await createService({
      description,
      code,
      price,
      unity,
    })

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

        <form onSubmit={handleSubmit(handleCreateNewService)}>
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

          <button type="submit" disabled={isSubmitting}>
            Criar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}
