import { useState } from 'react'
import { NavLink, Outlet } from 'react-router'
import plus from '../assets/common-assets/plus.svg'
import completedIcon from '../assets/navbar-icons/completed.svg'
import otherWeeksIcon from '../assets/navbar-icons/other-weeks.svg'
import pendingIcon from '../assets/navbar-icons/sandtime.svg'
import uncompletedIcon from '../assets/navbar-icons/uncompleted.svg'
import { NewGoalModal } from '../pages/goals/components/new-task-modal'

/* 
    TODO - 
        1. Adicionar o nome da rota atual no header 'Dashboard / Objetivos / 'nome_da_rota'
*/

const activeTabStyle = 'border-b-2 border-white '

export function TasksLayout() {
  const [isVisible, setIsVisible] = useState<boolean>(false)

  const modalVisibility = isVisible ? 'visible' : 'invisible'

  function turnTheModalState() {
    setIsVisible((prevVisibility) => !prevVisibility)
  }

  return (
    <div className=" bg-zinc-800 w-screen h-screen flex-col p-12 relative">
      <button
        type="button"
        className="btn-default btn-secondary"
        onClick={turnTheModalState}
      >
        <img src={plus} alt="" />
      </button>
      <NewGoalModal onClick={turnTheModalState} visibility={modalVisibility} />

      <header className="mb-4">
        <span className="text-stone-500 text-sm font-poppins inline-flex gap-1">
          Dashboard / <p className="text-white">Objetivos</p>
        </span>
      </header>
      <main>
        <header className="flex gap-2 items-end">
          <h1 className="leading-9">04 Dez</h1>
          <h3 className="text-stone-500">2024</h3>
        </header>
        <div className="w-full bg-stone-700 h-px mt-4 mb-2 " />
        <nav className="flex gap-2">
          <NavLink
            to={'/tasks/pending'}
            className={({ isActive }) =>
              isActive ? activeTabStyle : 'border-b-0'
            }
          >
            <div className="flex gap-3 items-center p-2">
              <img src={pendingIcon} alt="" />
              <span className="font-monts text-white text-sm font-semibold">
                Pendentes
              </span>
            </div>
          </NavLink>
          <NavLink
            to={'/tasks/uncompleted'}
            className={({ isActive }) =>
              isActive ? activeTabStyle : 'border-b-0'
            }
          >
            <div className="flex gap-3 items-center p-2">
              <img src={uncompletedIcon} alt="" className="w-6" />
              <span className="font-monts text-white text-sm font-semibold">
                Não Concluídos
              </span>
            </div>
          </NavLink>
          <NavLink
            to={'/tasks/completed'}
            className={({ isActive }) =>
              isActive ? activeTabStyle : 'border-b-0'
            }
          >
            <div className="flex gap-3 items-center p-2">
              <img src={completedIcon} alt="" className="w-6" />
              <span className="font-monts text-white text-sm font-semibold">
                Concluídos
              </span>
            </div>
          </NavLink>
          <NavLink
            to={'/tasks/other-weeks'}
            className={({ isActive }) =>
              isActive ? activeTabStyle : 'border-b-0'
            }
          >
            <div className="flex gap-3 items-center p-2">
              <img src={otherWeeksIcon} alt="" className="w-6" />
              <span className="font-monts text-white text-sm font-semibold">
                Outras semanas
              </span>
            </div>
          </NavLink>
        </nav>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
