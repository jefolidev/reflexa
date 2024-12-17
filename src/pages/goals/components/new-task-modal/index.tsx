import { type FormEvent, useState } from 'react'
import closeIcon from '../../../../assets/common-assets/close.svg'
import { useGoals } from '../../../../hooks/useGoals'
import type { PriorityValues } from '../task-card/priority'

interface ModalProps {
  visibility: string
  turnTheModalState: () => void
}

export function NewGoalModal({ visibility, turnTheModalState }: ModalProps) {
  const [goalName, setGoalName] = useState<string>('')
  const [goalCategory, setGoalCategory] = useState<string>('')
  const [initialHour, setInitialHour] = useState<string>('')
  const [endHour, setEndHour] = useState<string>('')
  const [priority, setPriority] = useState<PriorityValues>(1)

  const { setNewGoal } = useGoals()

  function clearInputs() {
    setGoalName('')
    setGoalCategory('')
    setInitialHour('')
    setEndHour('')
  }

  function createNewGoal(e: FormEvent) {
    e.preventDefault()
    setNewGoal({
      id: new Date().getTime(),
      name: goalName,
      category: goalCategory,
      priority: priority,
      endHour: endHour,
      startHour: initialHour,
      status: 'pending',
      createdAt: new Date()
    })

    clearInputs()
    turnTheModalState()
  }

  return (
    <div
      className={`fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 font-monts ${visibility}`}
    >
      <section className="py-8 px-5  flex flex-col gap-3 bg-stone-900 rounded-xl">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="font-">Criar nova tarefa</h1>
            <p className="text-stone-400 text-sm">
              Adicione uma nova tarefa à sua lista
            </p>
          </div>
          <button
            className="default-btn"
            type="button"
            onClick={turnTheModalState}
          >
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <form className="flex flex-col gap-5">
          <fieldset className="flex gap-5 ">
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Nome da tarefa</label>
              <input
                type="text"
                value={goalName}
                name="name"
                placeholder="Tarefa 1"
                onChange={(e) => setGoalName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Categoria</label>
              <input
                type="text"
              value={goalCategory}
                name="category"
                placeholder="Pessoal, Trabalho..."
                onChange={(e) => setGoalCategory(e.target.value)}
                required
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Hora inicial</label>
              <input
                type="number"
                value={initialHour}
                name="initialHour"
                className="flex-1"
                onChange={(e) => setInitialHour(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora final</label>
              <input
                type="number"
                value={endHour}
                name="endHour"
                className="flex-1"
                onChange={(e) => setEndHour(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="">Prioridade</label>
              <input
                type="number"
                value={priority}
                name="priority"
                placeholder="4"
                min={1}
                max={5}
                onChange={(e) =>
                  setPriority(Number(e.target.value) as PriorityValues)
                }
                required
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn-main p-2 font-semibold rounded-md justify-center flex"
            disabled={!goalName || !goalCategory || !priority}
            onClick={createNewGoal}
          >
            Criar tarefa
          </button>
        </form>
      </section>
    </div>
  )
}
