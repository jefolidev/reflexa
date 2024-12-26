import type { ReactNode } from 'react'

interface ModalContentProps {
	children: ReactNode
}

export function ModalContent({ children }: ModalContentProps) {
	return <div>{children}</div>
}
