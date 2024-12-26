import { useContext } from 'react'
import { ModalContext } from '../contexts/modal-context'

export function useModal() {
	return useContext(ModalContext)
}
