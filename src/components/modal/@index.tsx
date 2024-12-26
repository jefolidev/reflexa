import { type ReactNode, useState } from 'react'
import { ModalButton } from './button'
import { ModalContent } from './content'
import { ModalHeader } from './header'
import { ModalRoot } from './root'

interface ModalProps {
	title: string
	subtitle: string
	children: ReactNode
	disabled: boolean
	modalAction: () => void
}

export function Modal({
	title,
	subtitle,
	children,
	disabled,
	modalAction,
}: ModalProps) {
	const [isVisible, setIsVisible] = useState<boolean>(false)

	const modalVisibility = isVisible ? 'visible' : 'invisible'

	function turnTheModalState() {
		setIsVisible((prevVisibility) => !prevVisibility)
	}

	return (
		<ModalRoot visibility={modalVisibility}>
			<ModalHeader
				title={title}
				subtitle={subtitle}
				onClick={turnTheModalState}
			/>
			<ModalContent>{children}</ModalContent>
			<ModalButton disabled={disabled} onClick={modalAction} />
		</ModalRoot>
	)
}
