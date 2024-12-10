import unfinishedIcon from '../../tags/unfinished.svg'


export function UnfinishedTag() {
  return (
    <div className="flex gap-3 bg-red-800/60 text-red-300 rounded-full p-1 w-40 justify-center  ">
      <img src={unfinishedIcon} alt="" className="w-5" />
      <span className="font-monts text-sm font-normal">Não finalizado</span>
    </div>
  )
}
