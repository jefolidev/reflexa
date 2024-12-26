import closeIcon from '../../assets/common-assets/close.svg'
import { useModal } from '../../hooks/useModal'

interface ModalHeaderProps {
	title: string
	subtitle: string
	modalName: string
}

export function ModalHeader({ title, subtitle, modalName }: ModalHeaderProps) {
	const { toggleModalState } = useModal()

	return (
		<header className="flex justify-between items-start">
			<div>
				<h1 className="font-">{title}</h1>
				<p className="text-stone-400 text-sm">{subtitle}</p>
			</div>
			<button
				className="default-btn"
				type="button"
				onClick={() => toggleModalState(modalName)}
			>
				<img src={closeIcon} alt="" />
			</button>
		</header>
	)
}
