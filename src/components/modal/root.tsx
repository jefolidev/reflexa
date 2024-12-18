import type { ReactNode } from 'react'

interface ModalRootProps {
  visibility: string
  children: ReactNode
}

export function ModalRoot({ visibility, children }: ModalRootProps) {
  return (
    <div
      className={`fixed inset-0 bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 font-monts ${visibility}`}
    >
      <section className="py-8 px-5  flex flex-col gap-3 bg-stone-900 rounded-xl">
        {children}
      </section>
    </div>
  )
}
