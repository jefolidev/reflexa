import finishedIcon from '../../../assets/tags/finished.svg'

export function FinishedTag() {
  return (
    <div className="flex gap-3 bg-green-800/60 text-green-300 rounded-full p-1 w-40 justify-center  ">
      <img src={finishedIcon} alt="" className="w-4" />
      <span className="font-monts text-sm font-normal">Finalizado</span>
    </div>
  )
}
