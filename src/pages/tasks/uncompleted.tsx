import { useState } from 'react'

export function UncompletedTasksPage() {
  const [number, setNumber] = useState(0)

  function increaseNumberValue() {
    setNumber((prevState) => prevState + 1)
  }

  const decreaseNumberValue = () => {
    number === 0 ? setNumber(0) : setNumber((prevState) => prevState - 1)
  }
  return (
    <div className="">
      <h1>Incompletos</h1>
      <button type="button" onClick={increaseNumberValue}>
        +
      </button>
      <span className="text-7xl">{number}</span>
      <button type="button" onClick={decreaseNumberValue}>
        -
      </button>
    </div>
  )
}
