import type { ReactNode } from 'react'

interface ModalRootProps {
  children: ReactNode
}

export function ModalRoot({ children }: ModalRootProps) {
  return (
    <div className="fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 font-monts shadow-sm shadow-black">
      <section className="py-8 px-5  flex flex-col gap-3 bg-stone-900 rounded-xl">
        {children}
      </section>
    </div>
  )
}
