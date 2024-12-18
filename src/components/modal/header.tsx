import closeIcon from '../../assets/common-assets/close.svg'

interface ModalHeaderProps {
  title: string
  subtitle: string
  onClick: () => void
}

export function ModalHeader({ title, subtitle, onClick }: ModalHeaderProps) {
  return (
    <header className="flex justify-between items-start">
      <div>
        <h1 className="font-">{title}</h1>
        <p className="text-stone-400 text-sm">{subtitle}</p>
      </div>
      <button className="default-btn" type="button" onClick={onClick}>
        <img src={closeIcon} alt="" />
      </button>
    </header>
  )
}
