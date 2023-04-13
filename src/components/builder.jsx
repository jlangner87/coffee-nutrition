import { useState } from "react"

function Builder() {
  let initialCalories = 0
  let initialState = {
    size: 1,
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
    let combinedCalories = initialCalories + parseInt(formState.baseCalories) + ( parseFloat(formState.size)* parseInt(formState.milkCalories))
    setTotalCalories(Math.ceil(combinedCalories))
  }

  return (
    <div className="Builder">
      <h2>This is the builder</h2>
      <form onChange={handleChange}>
      <label htmlFor="size">Size</label>
        <select id="size">
          <option value={1}>Choose One</option>
          <option value={.75}>Small (12 oz)</option>
          <option value={1}>Medium (16 oz)</option>
          <option value={1.25}>Large (20 oz)</option>
        </select><br/>
        <label htmlFor="baseCalories">Drink</label>
        <select id="baseCalories">
          <option value={0}>Choose One</option>
          <option value={0}>Latte</option>
          <option value={0}>Espresso</option>
          <option value={0}>Drip Coffee</option>
          <option value={0}>Cold Brew</option>
          <option value={0}>Chai Latte</option>
          <option value={0}>Organic Tea</option>
          <option value={0}>Lemonade</option>
        
        </select><br/>
        <label htmlFor="milkCalories">Milk Type</label>
        <select id="milkCalories">
          <option value={0}>None</option>
          <option value={195}>2%</option>
          <option value={234}>Whole</option>
          <option value={479}>Breve</option>
          <option value={117}>Oat</option>
          <option value={65}>Almond</option>
        </select>
      </form>
      <p>Calories: {totalCalories}</p>
      <button onClick={addCalories}>Click</button>
    </div>
  )
}

export default Builder