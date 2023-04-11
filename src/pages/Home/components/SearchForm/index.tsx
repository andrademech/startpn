// Hooks
import { useForm } from 'react-hook-form'

// Styles
import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './styles'

// Zod
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContextSelector } from 'use-context-selector'
import { ServicesContext } from '../../../../contexts/ServicesContext'
import { useEffect } from 'react'

// Schema
const searchFormSchema = z.object({
  query: z.string(),
})

// Types
type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const fetchServices = useContextSelector(
    ServicesContext,
    (context) => {
      return context.fetchServices
    },
  )

  // React Hook Form
  const {
    // register é uma função que retorna um objeto com as propriedades necessárias para o input
    register,
    // handleSubmit é uma função que recebe uma função como parâmetro
    handleSubmit,
    // formState é um objeto que contém informações sobre o estado do formulário
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    // resolver é uma função que recebe um schema como parâmetro
    resolver: zodResolver(searchFormSchema),
  })

  // Functions
  async function handleSearchServices(data: SearchFormInputs) {
    await fetchServices(data.query)

    console.log(data)
  }

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        // Limpa o campo de pesquisa e envia uma nova busca com um campo vazio
        handleSubmit(() => handleSearchServices({ query: '' }))();
      }
    }

    // Adiciona o event listener ao input de texto
    const input = document.querySelector<HTMLInputElement>('input[type="text"]');
    input?.addEventListener('keydown', handleKeyDown);

    // Retorna uma função de limpeza para remover o event listener quando o componente for desmontado
    return () => {
      input?.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleSubmit, handleSearchServices]);

  return (
    <SearchFormContainer
      // passando a função handleSubmit para o form
      onSubmit={handleSubmit(handleSearchServices)}
    >
      <input
        type="text"
        placeholder="Busque por serviços"
        // passando a função register para o input
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
