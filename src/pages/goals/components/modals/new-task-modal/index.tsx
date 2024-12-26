import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ModalButton } from '../../../../../components/modal/button'
import { ModalContent } from '../../../../../components/modal/content'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import type { GoalsProps } from '../../../../../contexts/goals-context'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'

const newGoalSchema = z.object({
  taskName: z.string().min(1, 'Insira algum nome para a tarefa.'),
  taskCategory: z.string().min(1, 'Adicione alguma categoria para sua tarefa.'),
  taskInitialHour: z
    .string()
    .min(0, 'A hora inicial deve ser no mínimo 0.')
    .max(23, 'A hora inicial deve ser no máximo 23.')
    .optional(),
  taskEndHour: z.string().min(0).max(23).optional(),
  taskPriority: z.number().min(1).max(5),
})

export function NewGoalModal() {
  const { setNewGoal, goals } = useGoals()
  const { toggleModalState } = useModal()
  const { register, handleSubmit, watch } = useForm<GoalsProps>({
    resolver: zodResolver(newGoalSchema),
  })

  const nameInput = watch('taskName')
  const categoryInput = watch('taskCategory')
  const priorityInput = watch('taskPriority')

  const isSubmitDisabled = !nameInput || !categoryInput || !priorityInput

  function createNewGoal(data: GoalsProps) {
    try {
      console.log(data, goals)

      setNewGoal(data)
      toggleModalState('createModal')
    } catch (err) {
      console.error('Erro ao criar nova meta:', err)
    }
  }

  return (
    <ModalRoot>
      <ModalHeader
        title="Criar nova tarefa"
        subtitle="Adicione uma nova task à sua lista"
        modalName="createModal"
      />
      <ModalContent>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(createNewGoal)}
        >
          <fieldset className="flex gap-5 ">
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Nome da tarefa</label>
              <input
                placeholder="Tarefa 1"
                {...register('taskName', { required: true })}
              />
            </div>
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Categoria</label>
              <input
                placeholder="Pessoal, Trabalho..."
                {...register('taskCategory', { required: true })}
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Hora inicial</label>
              <input
                type="number"
                className="flex-1"
                {...register('taskInitialHour', {
                  max: 23,
                })}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora final</label>
              <input
                type="number"
                className="flex-1"
                {...register('taskEndHour', {
                  max: 23,
                })}
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="">Prioridade</label>
              <input
                type="number"
                placeholder="4"
                min={1}
                max={5}
                {...register('taskPriority', {
                  valueAsNumber: true,
                  required: true,
                })}
              />
            </div>
          </fieldset>
          <ModalButton type="submit" disabled={isSubmitDisabled} />
        </form>
      </ModalContent>
    </ModalRoot>
  )
}
