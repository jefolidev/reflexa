import turnArrowIcon from '../../../assets/common-assets/arrow-cycle.svg'

type ChartType = 'mood' | 'tasks'

interface MoodChartProps {
	result: string | number
	type: ChartType
	analytics: string
}

export function MoodChart({ analytics, result, type }: MoodChartProps) {
	const cardStyle = type === 'mood' ? '' : 'invisible'

	return (
		<div className="h-full flex-2 bg-stone-900 flex rounded-2xl px-6 py-8">
			<header className="flex h-14 w-full justify-between items-center">
				<div>
					{type === 'mood' ? (
						<h3 className="text-stone-400">
							Como você vem se sentindo nessa semana
						</h3>
					) : (
						<h3 className="text-stone-400">
							Objetivos concluídos nessa semana
						</h3>
					)}
					<span className="flex text-white text-xl font-monts font-bold items-center gap-2 ">
						{result}
						<p className="w-12 h-5 text-green-300 bg-green-700/70 text-sm text-center rounded-full">
							{analytics}
						</p>
					</span>
				</div>
				<button className={`noStyleButton ${cardStyle}`} type="button">
					<img src={turnArrowIcon} className="w-5 h-5" alt="" />
				</button>
			</header>
		</div>
	)
}
