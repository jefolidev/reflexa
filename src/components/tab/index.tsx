import { NavLink } from 'react-router'

interface TaskTabProps {
	to: string
	icon: string
	label: string
}

export function TaskTab({ icon, label, to }: TaskTabProps) {
	const activeTabStyle = 'border-b-2 border-white '

	return (
		<NavLink
			to={to}
			className={({ isActive }) => (isActive ? activeTabStyle : 'border-b-0')}
		>
			<div className="flex gap-3 items-center p-2">
				<img src={icon} alt="" className="w-6" />
				<span className="font-monts text-white text-sm font-semibold">
					{label}
				</span>
			</div>
		</NavLink>
	)
}
