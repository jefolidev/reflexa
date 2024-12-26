import { type ReactNode, createContext, useState } from 'react'

interface ModalContextProps {
	modalVisibility: Record<string, boolean>
	isModalVisible: (modalName: string) => boolean
	toggleModalState: (modalName: string) => void
	// isCreateGoalModalVisibile: boolean
	// isEditGoalModalVisibile: boolean
	// createModalVisibility: string
	// editModalVisibility: string
	// switchTheCreateGoalModalState: () => void
	// switchTheEditGoalModalState: () => void
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

	// const [isCreateGoalModalVisibile, setIsCreateGoalModalVisibile] =
	//   useState<boolean>(false)
	// const [isEditGoalModalVisibile, setIsEditGoalModalVisibile] =
	//   useState<boolean>(false)

	// const createModalVisibility = isCreateGoalModalVisibile
	//   ? 'visible'
	//   : 'invisible'

	// const editModalVisibility = isEditGoalModalVisibile ? 'visible' : 'invisible'

	// function switchTheCreateGoalModalState() {
	//   setIsCreateGoalModalVisibile((prevVisibility) => !prevVisibility)
	// }

	// function switchTheEditGoalModalState() {
	//   setIsEditGoalModalVisibile((prevVisibility) => !prevVisibility)
	// }

	return (
		<ModalContext.Provider
			value={{
				isModalVisible,
				modalVisibility,
				toggleModalState,
			}}
		>
			{children}
		</ModalContext.Provider>
	)
}
