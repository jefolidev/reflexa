import arrowLeft from '../../../../assets/common-assets/arrow-left.svg'
import arrowRight from '../../../../assets/common-assets/arrow-right.svg'
import check from '../../../../assets/common-assets/check.svg'
import happy from '../../../../assets/emojis-card/happy-emotion.svg'

export function MoodCard() {
  return (
    <div className=" h-full flex-1 bg-yellow-300 flex flex-col items-center justify-evenly rounded-2xl p-2  ">
      <header>
        <h3 className="text-center">Como você está se sentindo hoje?</h3>
      </header>
      <div>
        <img src={happy} alt="" />
      </div>
      <span className="font-poppins text-white text-xl">Estou Feliz</span>
      <div className="flex gap-2">
        <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
        <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
        <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
        <div className="bg-yellow-100 rounded-full w-1.5 h-1.5" />
        <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
      </div>

      <div className="flex gap-2">
        <div className="flex gap-1">
          <button
            type="button"
            className="btn-main btn-default btn-default w-8 h-8"
          >
            <img src={arrowLeft} alt="" />
          </button>
          <button type="button" className=" btn-main btn-default w-8 h-8">
            <img src={arrowRight} alt="" />
          </button>
        </div>
        <button type="button" className=" btn-main btn-default w-8 h-8">
          <img src={check} alt="" className="" />
        </button>
      </div>
    </div>
  )
}
