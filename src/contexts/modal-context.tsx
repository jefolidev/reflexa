import { type ReactNode, createContext, useState } from 'react'

interface ModalContextProps {
  isCreateGoalModalVisibile: boolean
  isEditGoalModalVisibile: boolean
  createModalVisibility: string
  editModalVisibility: string
  switchTheCreateGoalModalState: () => void
  switchTheEditGoalModalState: () => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export function ModalProvider({ children }: ModalProviderProps) {
  const [isCreateGoalModalVisibile, setIsCreateGoalModalVisibile] =
    useState<boolean>(false)
  const [isEditGoalModalVisibile, setIsEditGoalModalVisibile] =
    useState<boolean>(false)

  const createModalVisibility = isCreateGoalModalVisibile
    ? 'visible'
    : 'invisible'

  const editModalVisibility = isEditGoalModalVisibile ? 'visible' : 'invisible'

  function switchTheCreateGoalModalState() {
    setIsCreateGoalModalVisibile((prevVisibility) => !prevVisibility)
  }

  function switchTheEditGoalModalState() {
    setIsEditGoalModalVisibile((prevVisibility) => !prevVisibility)
  }

  return (
    <ModalContext.Provider
      value={{
        createModalVisibility,
        editModalVisibility,
        isCreateGoalModalVisibile,
        isEditGoalModalVisibile,
        switchTheCreateGoalModalState,
        switchTheEditGoalModalState,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
