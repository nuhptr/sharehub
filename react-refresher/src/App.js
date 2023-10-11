import GoalList from './components/goal-list'

import './App.css'

export default function App() {
   const courseGoals = [
      { id: 'cg1', text: 'Finish the course' },
      { id: 'cg2', text: 'Learn all about the course main topic' },
      { id: 'cg3', text: 'Help other students in the course Q&A' },
   ]

   return (
      <div>
         <h2 className='goal-title'>Course Goals</h2>
         <GoalList goals={courseGoals} />
      </div>
   )
}
