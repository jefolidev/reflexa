import turnArrowIcon from '../../assets/arrow-cycle.svg'
import arrowLeft from '../../assets/arrow-left.svg'
import arrowRight from '../../assets/arrow-right.svg'
import check from '../../assets/check.svg'
import checkDefaultEmoji from '../../assets/checklist/check-default.svg'
import happy from '../../assets/emotions/happy-emotion.svg'
import pencilEmoji from '../../assets/pencil-emoji.png'
import plus from '../../assets/plus.svg'

export function DashboardPage() {
  return (
    <div className=" bg-zinc-800 w-screen h-screen flex-col p-12 ">
      <header className="mb-4">
        <span className="text-stone-500 font-poppins">Dashboard</span>
      </header>
      <div className="flex flex-col gap-6">
        <header className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="flex gap-2 items-center">
              Olá, Jeferson! <p className="text-3xl">👋</p>
            </h1>
            <span className="font-monts text-stone-500 leading-3 font-bold">
              Sab, 7 de dez
            </span>
          </div>
          <div className="flex items-center gap-4">
            <h2>Como está sendo seu dia?</h2>
            <button className="flex items-center p-2" type="button">
              <img src={pencilEmoji} alt="" />
            </button>
          </div>
        </header>
        <main className="flex flex-col gap-8">
          <section className="flex justify-around gap-10 h-64 ">
            <div className=" h-full flex-1 bg-yellow-300 flex flex-col items-center justify-evenly rounded-2xl p-2  ">
              <header>
                <h3 className="text-center">
                  Como você está se sentindo hoje?
                </h3>
              </header>
              <div>
                <img src={happy} alt="" />
              </div>
              <span className="font-poppins text-white text-xl">
                Estou Feliz
              </span>
              <div className="flex gap-2">
                <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
                <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
                <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
                <div className="bg-yellow-100 rounded-full w-1.5 h-1.5" />
                <div className="bg-stone-600 rounded-full w-1.5 h-1.5" />
              </div>

              <div className="flex gap-2">
                <div className="flex gap-1">
                  <button type="button" className="w-8 h-8">
                    <img src={arrowLeft} alt="" />
                  </button>
                  <button type="button" className="w-8 h-8">
                    <img src={arrowRight} alt="" />
                  </button>
                </div>
                <button type="button" className="w-8 h-8">
                  <img src={check} alt="" className="" />
                </button>
              </div>
            </div>
            <div className="w-52 h-full flex-auto bg-stone-900 flex flex-col justify-between items-enter rounded-2xl px-6 py-8">
              <header>
                <h2>Que bom que você está contente!</h2>
              </header>
              <footer className="flex gap-2">
                <div className="bg-white h-5 p-3  inline-flex items-center rounded-full flex-initial  hover:cursor-pointer hover:bg-gray-200">
                  <span className="text-xs font-semibold font-monts ">
                    Falar com um amigo 📱
                  </span>
                </div>
                <div className="bg-white h-5  inline-flex items-center p-3 rounded-full flex-initial  hover:cursor-pointer  hover:bg-gray-200">
                  <span className="text-xs font-semibold font-monts ">
                    Assistir um filme 📺
                  </span>
                </div>
              </footer>
            </div>
            <div className="h-full flex-2 bg-stone-900 flex rounded-2xl px-6 py-8">
              <header className="flex h-14 w-full justify-between items-center">
                <div>
                  <h3 className="text-stone-400">
                    Como você se sentiu nos últimos dias
                  </h3>
                  <span className="flex text-white text-xl font-monts font-bold items-center gap-2 ">
                    Mais feliz
                    <p className="w-12 h-5 text-green-300 bg-green-700/70 text-sm text-center rounded-full">
                      +25%
                    </p>
                  </span>
                </div>
                <button className="noStyleButton " type="button">
                  <img src={turnArrowIcon} className="w-5 h-5" alt="" />
                </button>
              </header>
            </div>
          </section>
          <section className="flex flex-col gap-4">
            <header>
              <h2 className="font-monts">Objetivos que impactam</h2>
            </header>
            <main className="flex h-72 gap-6">
              <div className="flex flex-col w-72">
                <div className="flex justify-between items-center bg-stone-900 p-3.5 rounded-lg hover:bg-stone-800 hover:cursor-pointer">
                  <img src={checkDefaultEmoji} alt="" />
                  <span className="font-poppins text-sm text-white ">
                    Arrumar a cama
                  </span>
                  <div className="bg-green-700/70 rounded-full w-12 flex justify-center ">
                    <span className="font-monts  text-green-300 font-bold text-sm p-1 ">
                      5
                    </span>
                  </div>
                </div>s
              </div>
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
              <div className="h-full flex-2 bg-stone-900 flex rounded-2xl px-6 py-8">
                <header className="flex h-14 w-full justify-between items-center">
                  <div>
                    <h3 className="text-stone-400">
                      Objetivos concluídos nessa semana
                    </h3>
                    <span className="flex text-white text-xl font-monts font-bold items-center gap-2 ">
                      5
                      <p className="w-12 h-5 text-red-300 bg-red-600/70 text-sm text-center rounded-full">
                        +25%
                      </p>
                    </span>
                  </div>
                </header>
              </div>
            </main>
          </section>
        </main>
      </div>
    </div>
  )
}
