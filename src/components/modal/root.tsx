import type { ReactNode } from 'react'

interface ModalRootProps {
  children: ReactNode
}

export function ModalRoot({ children }: ModalRootProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md flex items-center justify-center z-50 cursor-default">
      <section
        className="py-8 px-5 flex flex-col gap-3 bg-stone-900 rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </section>
    </div>
  )
}
