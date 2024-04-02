import "./goal-list.module.css"

export default function GoalList({ goals }) {
    return (
        <ul className="goal-list">
            {goals.map((goal) => (
                <li key={goal.id}>{goal.text}</li>
            ))}
        </ul>
    )
}
