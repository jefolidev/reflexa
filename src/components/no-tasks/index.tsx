import illustration from '../../assets/common-assets/none-tasks.svg'

export function NoTasks() {
  return (
    <div className="flex flex-col items-center justify-center -mt-8">
      <img
        src={illustration}
        alt="homem acenando"
        className="w-[35rem] opacity-20 -mb-16"
      />
      <p className="select-none font-monts text-xl font-semibold text-black opacity-40">
        Nenhuma tarefa para completar! Clique no botão de criar e comece a se
        organizar!
      </p>
    </div>
  )
}
