import { useLocation } from 'react-router-dom'
import GoalContainer from './UI/GoalContainer'

export default function Goal() {
  const location = useLocation()
  const user = location.state?.user
  return (
    <div>
      <h1 className="goal-title">Choose your goal</h1>
      <div className="goal-div">
        <GoalContainer
          workout_goal="Weight Loss"
          image="client/public/images/weightloss.png"
          user={user}
        />
        <GoalContainer
          workout_goal="Gain Muscle"
          image="client/public/images/gainmuscle.png"
          user={user}
        />
        <GoalContainer
          workout_goal="Body Building"
          image="client/public/images/bodybuild.png"
          user={user}
        />
      </div>
    </div>
  )
}
