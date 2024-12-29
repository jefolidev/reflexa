import { Outlet } from 'react-router'
import { NavBarTab } from '../components/navbar'

import profileIcon from '../assets/common-assets/profile-icon.svg'
import logo from '../assets/logo-title.svg'
import chatIcon from '../assets/sidebar-icons/chat-icon.svg'
import flagIcon from '../assets/sidebar-icons/flag-icon.svg'
import homeIcon from '../assets/sidebar-icons/home-icon.svg'
import objIcon from '../assets/sidebar-icons/obj-icon.svg'
import smileIcon from '../assets/sidebar-icons/smile-icon.svg'

export function DefaultLayout() {
  return (
    <div className="flex">
      <aside className="w-1/4 max-w-72 bg-zinc-900 h-screen p-6 flex flex-col justify-between">
        <div>
          <div className="flex flex-col w-full py-4 items-center">
            <img src={logo} alt="" className="w-52" />
          </div>
          <div className="flex-col ">
            <header className="">
              <span className="font-poppins text-stone-400 font-medium ">
                Menu Principal
              </span>
            </header>
            <main className="flex flex-col gap-6 px-2 py-6 ">
              <NavBarTab to="/" icon={homeIcon} label="Dashboard" />
              <NavBarTab to="/tasks/pending" icon={objIcon} label="Objetivos" />
              <NavBarTab
                to="/history"
                icon={smileIcon}
                label="Histórico de Humor"
              />
              <NavBarTab to="/notes" icon={chatIcon} label="Anotações" />
              <NavBarTab to="/habits" icon={flagIcon} label="Hábitos" />
            </main>
          </div>
        </div>

        <footer className="">
          <img src={profileIcon} className="w-6 " alt="" />
        </footer>
      </aside>
      <Outlet />
    </div>
  )
}
