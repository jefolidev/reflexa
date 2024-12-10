interface ToolTipProps {
  toolTip: string
  isVisible?: boolean
}

export function ToolTip({ toolTip, isVisible = false }: ToolTipProps) {
  const visibilityStyle = isVisible ? 'visible' : 'invisible'

  return (
    <div
      className={`absolute text-center bg-stone-900 rounded p-4 ${visibilityStyle}`}
    >
      <span>{toolTip}</span>
    </div>
  )
}
