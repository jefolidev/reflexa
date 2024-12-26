import { Outlet } from 'react-router'
import { TaskTab } from '../components/tab'
import { useModal } from '../hooks/useModal'
import { NewGoalModal } from '../pages/goals/components/modals/new-task-modal'

import plus from '../assets/common-assets/plus.svg'
import completedIcon from '../assets/navbar-icons/completed.svg'
import otherWeeksIcon from '../assets/navbar-icons/other-weeks.svg'
import pendingIcon from '../assets/navbar-icons/sandtime.svg'
import uncompletedIcon from '../assets/navbar-icons/uncompleted.svg'

/* 
    TODO - 
        1. Adicionar o nome da rota atual no header 'Dashboard / Objetivos / 'nome_da_rota'
*/

export function TasksLayout() {
	const { isModalVisible, toggleModalState } = useModal()

	return (
		<div className=" bg-zinc-800 w-screen h-screen flex-col p-12 relative">
			<button
				type="button"
				className="btn-default btn-secondary"
				onClick={() => toggleModalState('createModal')}
			>
				<img src={plus} alt="" />
			</button>

			{isModalVisible('createModal') && <NewGoalModal />}

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
					<TaskTab to="/tasks/pending" icon={pendingIcon} label="Pendentes" />
					<TaskTab
						to="/tasks/uncompleted"
						icon={uncompletedIcon}
						label="Não Concluídos"
					/>
					<TaskTab
						to="/tasks/completed"
						icon={completedIcon}
						label="Concluídos"
					/>
					<TaskTab
						to="/tasks/other-weeks"
						icon={otherWeeksIcon}
						label="Outras semanas"
					/>
				</nav>
				<div>
					<Outlet />
				</div>
			</main>
		</div>
	)
}
