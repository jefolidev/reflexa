import { NavLink } from 'react-router'

interface NavBarTab {
	to: string
	icon: string
	label: string
}

export function NavBarTab({ to, icon, label }: NavBarTab) {
	return (
		<NavLink to={to}>
			<div className="flex gap-6 items-center ">
				<img src={icon} className="w-6" alt="" />
				<span className="font-monts font-semibold  text-stone-400  ">
					{label}
				</span>
			</div>
		</NavLink>
	)
}
