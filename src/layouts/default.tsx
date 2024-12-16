import { NavLink, Outlet } from 'react-router'

import profileIcon from '../assets/common-assets/profile-icon.svg'
import chatIcon from '../assets/sidebar-icons/chat-icon.svg'
import flagIcon from '../assets/sidebar-icons/flag-icon.svg'
import homeIcon from '../assets/sidebar-icons/home-icon.svg'
import objIcon from '../assets/sidebar-icons/obj-icon.svg'
import smileIcon from '../assets/sidebar-icons/smile-icon.svg'

export function DefaultLayout() {
  return (
    <div className="flex">
      <aside className="w-1/4 max-w-72 bg-zinc-900 h-screen p-6 flex-col">
        <div className="flex w-full py-6">
          <img src={profileIcon} className="w-6 " alt="" />
        </div>
        <div className="flex-col ">
          <header className="">
            <span className="font-poppins text-stone-400 font-medium ">
              Menu Principal
            </span>
          </header>
          <main className="flex flex-col gap-6 px-2 py-6 ">
            <NavLink to={'/'}>
              <div className="flex gap-6 items-center ">
                <img src={homeIcon} className="w-6" alt="" />
                <span className="font-monts font-semibold  text-stone-400  ">
                  Dashboard
                </span>
              </div>
            </NavLink>
            <NavLink to={'/tasks/pending'}>
              <div className="flex gap-6 items-center ">
                <img src={objIcon} className="w-6" alt="" />
                <span className="font-monts font-semibold  text-stone-400 ">
                  Objetivos
                </span>
              </div>
            </NavLink>
            <a href="#a">
              <div className="flex gap-6 items-center shrink-0 ">
                <img src={smileIcon} className="w-6" alt="" />
                <span className="  font-monts font-semibold  text-nowrap text-stone-400 ">
                  Histórico de humor
                </span>
              </div>
            </a>
            <a href="#a">
              <div className="flex gap-6 items-center ">
                <img src={chatIcon} className="w-6" alt="" />
                <span className="font-monts font-semibold  text-stone-400 ">
                  Anotações
                </span>
              </div>
            </a>
            <a href="#a">
              <div className="flex gap-6 items-center ">
                <div className="w-6">
                  <img src={flagIcon} className="w-5  mx-0.5" alt="" />
                </div>
                <span className="font-monts font-semibold text-stone-400  ">
                  Hábitos
                </span>
              </div>
            </a>
          </main>
        </div>
      </aside>
      <Outlet />
    </div>
  )
}
