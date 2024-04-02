import { useState } from "react"

import "./goal-list.module.css"

export default function NewGoal({ onAddGoal }) {
    const [enteredValue, setEnteredValue] = useState("")

    const addGoalHandler = (event) => {
        event.preventDefault()

        const newGoal = { id: Math.random().toString(), text: enteredValue }
        console.log(newGoal)

        onAddGoal(newGoal)
        setEnteredValue("")
    }

    const textChangeHandler = (event) => {
        setEnteredValue(event.target.value)
    }

    return (
        <form className="new-goal" onSubmit={addGoalHandler}>
            <input type="text" value={enteredValue} onChange={textChangeHandler} />
            <button type="submit">Add Goal</button>
        </form>
    )
}
