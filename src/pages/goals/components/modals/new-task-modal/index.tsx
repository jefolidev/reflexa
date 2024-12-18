import { v4 as uuidv4 } from 'uuid'

import { type FormEvent, useState } from 'react'
import { ModalButton } from '../../../../../components/modal/button'
import { ModalContent } from '../../../../../components/modal/content'
import { ModalHeader } from '../../../../../components/modal/header'
import { ModalRoot } from '../../../../../components/modal/root'
import { useGoals } from '../../../../../hooks/useGoals'
import { useModal } from '../../../../../hooks/useModal'
import type { PriorityValues } from '../../task-card/priority'

export function NewGoalModal() {
  const [goalName, setGoalName] = useState<string>('')
  const [goalCategory, setGoalCategory] = useState<string>('')
  const [initialHour, setInitialHour] = useState<string>('')
  const [endHour, setEndHour] = useState<string>('')
  const [priority, setPriority] = useState<PriorityValues>(1)

  const { setNewGoal } = useGoals()
  const { createModalVisibility, switchTheCreateGoalModalState } = useModal()

  function clearInputs() {
    setGoalName('')
    setGoalCategory('')
    setInitialHour('')
    setEndHour('')
  }

  function createNewGoal(e: FormEvent) {
    e.preventDefault()
    setNewGoal({
      id: uuidv4(),
      name: goalName,
      category: goalCategory,
      priority: priority,
      endHour: endHour,
      startHour: initialHour,
      status: 'pending',
      createdAt: new Date(),
    })

    clearInputs()
    switchTheCreateGoalModalState()
  }

  return (
    <ModalRoot visibility={createModalVisibility}>
      <ModalHeader
        title="Criar nova tarefa"
        subtitle="Adicione uma nova task à sua lista"
        onClick={switchTheCreateGoalModalState}
      />
      <ModalContent>
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
        </form>
      </ModalContent>
      <ModalButton onClick={createNewGoal} />
    </ModalRoot>
  )
}
