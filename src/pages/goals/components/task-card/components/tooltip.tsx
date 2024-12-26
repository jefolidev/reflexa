interface ToolTipProps {
	text: string
	isVisible?: boolean
}

export function ToolTip({ text, isVisible = false }: ToolTipProps) {
	const visibilityStyle = isVisible ? 'visible' : 'invisible'

	return (
		<div
			className={`absolute text-center bg-stone-900 rounded p-3 top-6 ${visibilityStyle}`}
		>
			<span className="font-poppins text-white font-normal">{text}</span>
		</div>
	)
}
