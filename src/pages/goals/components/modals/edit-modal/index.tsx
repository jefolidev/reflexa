import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { ModalContent } from '../../../../../components/modal/content'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import type { GoalsProps } from '../../../../../contexts/goals-context'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'
import { useState } from 'react'

interface EditGoalModalProps {
  taskId: string
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

export function EditGoalModal({ taskId }: EditGoalModalProps) {
  const [isInitialHourHigherThanEndHour, setIsInitialHourHigherThanEndHour] =
    useState<boolean>(false)

  const { goals, editCurrentGoal } = useGoals()
  const { toggleModalState } = useModal()

  const goalToEdit = goals.find((goal) => goal.id === taskId)

  const { register, handleSubmit, watch } = useForm<GoalsProps>({
    resolver: zodResolver(editedGoalSchema),
    defaultValues: {
      taskName: goalToEdit?.taskName,
      taskCategory: goalToEdit?.taskCategory,
      taskInitialHour: goalToEdit?.taskInitialHour,
      taskEndHour: goalToEdit?.taskEndHour,
      taskPriority: goalToEdit?.taskPriority,
    },
  })

  const initalHourInput = watch('taskInitialHour')
  const endHourInput = watch('taskEndHour')

  function handleEditGoalSubmission(data: GoalsProps) {
    try {
      if (initalHourInput! > endHourInput!) {
        setIsInitialHourHigherThanEndHour((prevState) => !prevState)
        return
      }
      editCurrentGoal(taskId, data)
      toggleModalState('editModal')
    } catch (err) {
      console.error(err)
    }
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
