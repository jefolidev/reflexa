import { useEffect, useState } from 'react'
import closeIcon from '../../../../../assets/common-assets/close.svg'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'

interface EditGoalModalProps {
  taskId: string
}

export function EditGoalModal({ taskId }: EditGoalModalProps) {
  const { goals, editCurrentGoal } = useGoals()
  const { toggleModalState } = useModal()

  const goalToEdit = goals.find((goal) => goal.id === taskId)

  const [taskNameToEdit, setTaskNameToEdit] = useState<string>(
    goalToEdit?.taskName || ''
  )
  const [taskCategoryToEdit, setTaskCategoryToEdit] = useState<string>(
    goalToEdit?.taskCategory || ''
  )
  const [taskPriorityToEdit, setTaskPriorityToEdit] = useState<number>(
    goalToEdit?.taskPriority || 1
  )

  const [taskInitialHourToEdit, setTaskInitialHourToEdit] = useState<number>(
    goalToEdit?.taskInitialHour || 1
  )
  const [taskEndHourToEdit, setTaskEndHourToEdit] = useState<number>(
    goalToEdit?.taskEndHour || 1
  )

  useEffect(() => {
    if (goalToEdit) {
      setTaskNameToEdit(goalToEdit.taskName || '')
      setTaskCategoryToEdit(goalToEdit.taskCategory || '')
      setTaskPriorityToEdit(goalToEdit.taskPriority || 1)
      setTaskInitialHourToEdit(goalToEdit.taskInitialHour || 1)
      setTaskEndHourToEdit(goalToEdit.taskEndHour || 1)
    }
  }, [goalToEdit])

  function editGoal(e: React.FormEvent) {
    e.preventDefault()

    if (!taskNameToEdit || !taskCategoryToEdit || !taskPriorityToEdit) {
      alert('Preencha todos os campos obrigatórios!')
      return
    }

    if (goalToEdit) {
      const updatedGoals = goals.map((goal) =>
        goal.id === goalToEdit.id
          ? {
              ...goalToEdit,
              name: taskNameToEdit || goalToEdit.taskName,
              category: taskCategoryToEdit || goalToEdit.taskCategory,
              priority: taskPriorityToEdit,
              startHour: taskInitialHourToEdit || goalToEdit.taskInitialHour,
              endHour: taskEndHourToEdit || goalToEdit.taskEndHour,
            }
          : goal
      )

      editCurrentGoal(updatedGoals)
      toggleModalState('editModal')
    }
  }

  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 font-monts">
      <section className="py-8 px-5  flex flex-col gap-3 bg-stone-900 rounded-xl">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="font-">Editando a tarefa</h1>
            <p className="text-stone-400 text-sm">
              Faça as alterações desejadas depois salve-as
            </p>
          </div>
          <button
            className="default-btn"
            type="button"
            onClick={() => toggleModalState('editModal')}
          >
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <form className="flex flex-col gap-5" onSubmit={editGoal}>
          <fieldset className="flex gap-5 ">
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Nome da tarefa</label>
              <input
                type="text"
                value={taskNameToEdit}
                placeholder="Tarefa 1"
                onChange={(e) => setTaskNameToEdit(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Categoria</label>
              <input
                type="text"
                value={taskCategoryToEdit}
                placeholder="Pessoal, Trabalho..."
                onChange={(e) => setTaskCategoryToEdit(e.target.value)}
                required
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Hora inicial</label>
              <input
                type="number"
                value={taskInitialHourToEdit}
                className="flex-1"
                onChange={(e) =>
                  setTaskInitialHourToEdit(Number(e.target.value))
                }
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora final</label>
              <input
                type="number"
                value={taskEndHourToEdit}
                className="flex-1"
                onChange={(e) => setTaskEndHourToEdit(Number(e.target.value))}
                required
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="">Prioridade</label>
              <input
                type="number"
                value={taskPriorityToEdit}
                placeholder="4"
                min={1}
                max={5}
                onChange={(e) => setTaskPriorityToEdit(Number(e.target.value))}
                required
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn-main p-2 font-semibold rounded-md justify-center flex"
          >
            Salvar
          </button>
        </form>
      </section>
    </div>
  )
}
