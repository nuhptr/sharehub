import { useState } from "react"

import { GoalList } from "./components/goal-list"
import NewGoal from "./components/new-goal"

import "./App.css"

const App = () => {
   const [courseGoals, setCourseGoals] = useState([
      { id: "cg1", text: "Finish the course" },
      { id: "cg2", text: "Learn all about the course main topic" },
      { id: "cg3", text: "Help other students in the course Q&A" },
   ])

   const addNewGoalHandler = (newGoal) => {
      setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal))
   }

   return (
      <div>
         <h2 className="goal-title">Course Goals</h2>
         <NewGoal onAddGoal={addNewGoalHandler} />
         <GoalList goals={courseGoals} />
      </div>
   )
}

export default App
