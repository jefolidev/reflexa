interface TaskRootProps {
  children: React.ReactNode
}

export function TaskRoot({ children }: TaskRootProps) {
  return (
    <div className="flex bg-zinc-900 py-4 px-6 rounded-lg justify-between items-center ">
      {children}
    </div>
  )
}
