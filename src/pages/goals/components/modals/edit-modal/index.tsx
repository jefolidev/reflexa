import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ModalContent } from '../../../../../components/modal/content'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import type { GoalsProps } from '../../../../../contexts/goals-context'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'

interface EditGoalModalProps {
  goal: GoalsProps
}

const editedGoalSchema = z.object({
  taskName: z.string().min(1, 'Insira algum nome para a tarefa.'),
  taskCategory: z.string().min(1, 'Adicione alguma categoria para sua tarefa.'),
  taskInitialHour: z
    .string()
    .min(0, 'A hora inicial deve ser no mínimo 0.')
    .max(2)
    .optional(),
  taskEndHour: z.string().min(0).max(2).optional(),
  taskPriority: z.number().min(1).max(5),
})

export function EditGoalModal({ goal }: EditGoalModalProps) {
  const [isInitialHourHigherThanEndHour, setIsInitialHourHigherThanEndHour] =
    useState<boolean>(false)

  const { editCurrentGoal } = useGoals()
  const { toggleModalState } = useModal()

  const { register, handleSubmit, watch } = useForm<GoalsProps>({
    resolver: zodResolver(editedGoalSchema),
    defaultValues: {
      taskName: goal?.taskName,
      taskCategory: goal?.taskCategory,
      taskInitialHour: goal?.taskInitialHour,
      taskEndHour: goal?.taskEndHour,
      taskPriority: goal?.taskPriority,
    },
  })

  const initalHourInput = watch('taskInitialHour')
  const endHourInput = watch('taskEndHour')

  function handleEditGoalSubmission(data: GoalsProps) {
    if (initalHourInput! > endHourInput!) {
      setIsInitialHourHigherThanEndHour((prevState) => !prevState)
      return
    }
    editCurrentGoal(goal, data)
    toggleModalState('editModal')
  }
  return (
    <ModalRoot>
      <ModalHeader
        title="Editando a tarefa"
        subtitle="Faça as alterações desejadas depois salve-as"
        modalName="editModal"
      />
      <ModalContent>
        <form
          className="flex flex-col gap-5"
          onSubmit={handleSubmit(handleEditGoalSubmission)}
        >
          <fieldset className="flex gap-5 ">
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Nome da tarefa</label>
              <input
                type="text"
                {...register('taskName', { required: true })}
              />
            </div>
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Categoria</label>
              <input
                type="text"
                {...register('taskCategory', { required: true })}
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Hora inicial</label>
              <input
                type="number"
                max={23}
                className="flex-1"
                {...register('taskInitialHour')}
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora final</label>
              <input
                type="number"
                max={23}
                className="flex-1"
                {...register('taskEndHour')}
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
                  required: true,
                  valueAsNumber: true,
                })}
              />
            </div>
          </fieldset>
          {isInitialHourHigherThanEndHour && (
            <p className="font-monts text-red-500">
              A hora inicial deve ser menor que a final.
            </p>
          )}
          <button
            type="submit"
            className="btn-main p-2 font-semibold rounded-md justify-center flex"
          >
            Salvar
          </button>
        </form>
      </ModalContent>
    </ModalRoot>
  )
}
