import { useState } from "react"

function Builder() {
  let initialCalories = 0
  let initialState = {
    baseCalories: 0,
    milkCalories: 0
  }
  const [totalCalories, setTotalCalories]= useState(initialCalories)
  const [formState, setFormState]= useState(initialState)

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }


  const addCalories = (event) => {
    event.preventDefault()
    let iteration = initialCalories + parseInt(formState.baseCalories) + parseInt(formState.milkCalories)
    setTotalCalories(iteration)
  }


  return (
    <div className="Builder">
      <h2>This is the builder</h2>
      <form onChange={handleChange}>
        <select id="baseCalories">
          <option value={0}>Choose One</option>
          <option value={500}>Latte</option>
        </select>
        <select id="milkCalories">
          <option value={0}>Choose One</option>
          <option value={50}>Whole</option>
          <option value={75}>Breve</option>
        </select>
      </form>
      <p>Calories: {totalCalories}</p>
      <button onClick={addCalories}>Click</button>
    </div>
  )
}

export default Builder