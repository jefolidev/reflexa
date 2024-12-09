import checkIcon from '../assets/check-default.svg'
import editIcon from '../assets/edit.svg'
import deleteIcon from '../assets/trash.svg'

export function TaskCard() {
  return (
    <div className="flex bg-zinc-900 py-4 px-6 rounded-lg justify-between items-center">
      <div className="flex gap-8 w-2/4">
        <div className="h-10 w-0.5 rounded-full bg-red-500 flex" />
        <div className="flex flex-col gap-.5">
          <h4>Limpar a casa</h4>
          <p className="text-gray-300 font-monts text-sm">Outros</p>
        </div>
      </div>
      <div className="flex gap-1 text-white font-monts font-medium text-lg ">
        <span>09h</span>
        <span>-</span>
        <span>12h</span>
      </div>
      <div className="flex bg-green-500/60 rounded-full w-16 h-7 justify-center items-center p-1">
        <span className="text-green-300 font-monts font-medium text-lg">5</span>
      </div>
      <div className="flex gap-2">
        <button type="button" className="noStyleButton">
          <img src={deleteIcon} alt="" />
        </button>
        <button type="button" className="noStyleButton">
          <img src={editIcon} alt="" />
        </button>
        <button type="button" className="noStyleButton">
          <img src={checkIcon} alt="" />
        </button>
      </div>
    </div>
  )
}
