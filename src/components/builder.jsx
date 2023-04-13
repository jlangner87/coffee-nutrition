import { useState } from "react"

function Builder() {
  const initialState = 0
  let [baseCalories, setBaseCalories] = useState(initialState)

  const addCalories = (e) => {
    e.preventDefault()
    let iteration = baseCalories +=1
    setBaseCalories(iteration)
  }

  return (
    <div className="Builder">
      <h2>This is the builder</h2>
      <p>Calories: {baseCalories}</p>
      <button onClick={addCalories}>Click</button>
    </div>
  )
}

export default Builder