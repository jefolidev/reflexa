import closeIcon from '../../../../../assets/common-assets/close.svg'

interface EditGoalModalProps {
  visibility: string
  taskId: string
  turnTheModalState: () => void
}

export function EditGoalModal({
  turnTheModalState,
  visibility,
  taskId,
}: EditGoalModalProps) {

    
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 font-monts ${visibility}`}
    >
      <section className="py-8 px-5  flex flex-col gap-3 bg-stone-900 rounded-xl">
        <header className="flex justify-between items-start">
          <div>
            <h1 className="font-">Editando a tarefa</h1>
            <p className="text-stone-400 text-sm">
              Faça as alterações desejadas depois salve-as
            </p>
          </div>
          <button
            className="default-btn"
            type="button"
            onClick={turnTheModalState}
          >
            <img src={closeIcon} alt="" />
          </button>
        </header>
        <form className="flex flex-col gap-5">
          <fieldset className="flex gap-5 ">
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Nome da tarefa</label>
              <input type="text" name="name" placeholder="Tarefa 1" required />
            </div>
            <div className="flex flex-col flex-2 justify-between">
              <label htmlFor="">Categoria</label>
              <input
                type="text"
                name="category"
                placeholder="Pessoal, Trabalho..."
                required
              />
            </div>
          </fieldset>
          <fieldset className="flex gap-5">
            <div className="flex flex-col">
              <label htmlFor="">Hora inicial</label>
              <input
                type="number"
                name="initialHour"
                className="flex-1"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="">Hora final</label>
              <input type="number" name="endHour" className="flex-1" required />
            </div>
            <div className="flex flex-col  ">
              <label htmlFor="">Prioridade</label>
              <input
                type="number"
                name="priority"
                placeholder="4"
                min={1}
                max={5}
                required
              />
            </div>
          </fieldset>
          <button
            type="submit"
            className="btn-main p-2 font-semibold rounded-md justify-center flex"
          >
            Salvar
          </button>
        </form>
      </section>
    </div>
  )
}
