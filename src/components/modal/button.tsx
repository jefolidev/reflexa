import type { ButtonHTMLAttributes } from 'react'
import { useModal } from '../../hooks/useModal'

interface ModalButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'choice'
}

export function ModalButton({ variant = 'default', ...rest }: ModalButton) {
  const { toggleModalState } = useModal()

  return (
    <>
      {variant === 'default' ? (
        <button
          type="submit"
          className="btn-main p-2 font-semibold rounded-md justify-center flex disabled:bg-[#e5e5e5] disabled:cursor-not-allowed "
          {...rest}
        >
          Criar tarefa
        </button>
      ) : (
        <div className="flex justify-end gap-2 ">
          <button
            type="submit"
            className="btn-default btn-error text-white  p-2 font-semibold justify-center flex"
            onClick={() => toggleModalState('deleteModal')}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="btn-default btn-success  p-2 font-semibold justify-center flex"
            {...rest}
          >
            Excluir
          </button>
        </div>
      )}
    </>
  )
}
