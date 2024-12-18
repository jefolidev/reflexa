import closeIcon from '../../../../assets/common-assets/close.svg'

interface ModalProps {
  visibility: string
  onClick: () => void
}

export function NewGoalModal({ visibility, onClick }: ModalProps) {
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 font-monts ${visibility}`}
    >
      <section className="py-8 px-5  flex flex-col gap-3 bg-stone-900 rounded-xl">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="font-">Criar nova tarefa</h1>
            <p className="text-stone-400 text-sm">
              Adicione uma nova tarefa à sua lista
            </p>
          </div>
          <button className="default-btn" type="button" onClick={onClick}>
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <form action="POST" className="flex flex-col gap-5">
          <fieldset className="flex gap-5 ">
            <div className="flex flex-col justify-between">
              <label htmlFor="">Nome da tarefa</label>
              <input type="text" name="name" placeholder="Tarefa 1" />
            </div>
            <div className="flex flex-col justify-between">
              <label htmlFor="">Categoria</label>
              <input
                type="text"
                name="category"
                placeholder="Pessoal, Trabalho..."
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-5 items-center">
            <div className="flex flex-2">
              <div className="flex flex-2 flex-col">
                <label htmlFor="">Hora inicial</label>
                <input
                  type="time"
                  name="initialHour"
                  placeholder="08"
                  className="flex-1"
                />
              </div>
              <div className="flex flex-col flex-2">
                <label htmlFor="">Hora final</label>
                <input
                  type="time"
                  name="endHour"
                  placeholder="12"
                  className="flex-1"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between flex-2">
              <label htmlFor="">Prioridade</label>
              <input
                type="number"
                name="priority"
                id=""
                placeholder="4"
                min={1}
                max={5}
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn-main p-2 font-semibold rounded-md justify-center flex"
          >
            Criar tarefa
          </button>
        </form>
      </section>
    </div>
  )
}
