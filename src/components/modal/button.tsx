import type { ButtonHTMLAttributes } from 'react'

interface ModalButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

export function ModalButton({ ...rest }: ModalButton) {
  return (
    <button
      type="submit"
      className="btn-main p-2 font-semibold rounded-md justify-center flex"
      {...rest}
    >
      Criar tarefa
    </button>
  )
}
