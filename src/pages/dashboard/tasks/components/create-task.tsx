import plus from '../../../../assets/common-assets/plus.svg'

export function CreateTaskCard() {
	return (
		<div className=" h-full  bg-stone-900 flex flex-col justify-between items-enter rounded-2xl px-6 py-8">
			<header>
				<h2>Adicionar task rápida</h2>
			</header>
			<footer className="flex gap-2 self-end">
				<button
					type="button"
					className="hover:cursor-pointer hover:bg-gray-200"
				>
					<img src={plus} alt="" className="p-1" />
				</button>
			</footer>
		</div>
	)
}
