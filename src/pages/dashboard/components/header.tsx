import pencilEmoji from '../../../assets/common-assets/pencil-emoji.png'

interface DashboardHeaderProps {
	userName: string
	currentDate: string
}

export function DashboardHeader({
	userName,
	currentDate,
}: DashboardHeaderProps) {
	return (
		<header className="flex justify-between items-center">
			<div className="flex flex-col">
				<h1 className="flex gap-2 items-center">
					Olá, {userName}! <p className="text-3xl">👋</p>
				</h1>
				<span className="font-monts text-stone-500 leading-3 font-bold">
					{currentDate}
				</span>
			</div>
			<div className="flex items-center gap-4">
				<h2>Como está sendo seu dia?</h2>
				<button
					className="btn-main btn-default flex items-center p-2"
					type="button"
				>
					<img src={pencilEmoji} alt="" />
				</button>
			</div>
		</header>
	)
}
