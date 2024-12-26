import unfinishedIcon from '../../../assets/tags/unfinished.svg'

export function UnfinishedTag() {
	return (
		<div className="flex gap-2 bg-red-800/60 text-red-300 rounded-full p-1 w-40 justify-center  ">
			<img src={unfinishedIcon} alt="" className="w-4" />
			<span className="font-monts text-sm font-normal">Não finalizado</span>
		</div>
	)
}
