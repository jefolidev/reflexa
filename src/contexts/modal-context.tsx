import { type ReactNode, createContext, useState } from 'react'

interface ModalContextProps {
  modalVisibility: Record<string, boolean>
  isAnyModalVisible: boolean
  isModalVisible: (modalName: string) => boolean
  toggleModalState: (modalName: string) => void
}

interface ModalProviderProps {
  children: ReactNode
}

export const ModalContext = createContext({} as ModalContextProps)

export function ModalProvider({ children }: ModalProviderProps) {
  const [modalVisibility, setModalVisibility] = useState<
    Record<string, boolean>
  >({})

  function isModalVisible(modalName: string): boolean {
    return !!modalVisibility[modalName]
  }

  function toggleModalState(modalName: string) {
    setModalVisibility((prevVisibility) => ({
      ...prevVisibility,
      [modalName]: !prevVisibility[modalName],
    }))
  }

  const isAnyModalVisible = Object.values(modalVisibility).some(
    (state) => state
  )

  return (
    <ModalContext.Provider
      value={{
        isModalVisible,
        toggleModalState,
        isAnyModalVisible,
        modalVisibility,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
