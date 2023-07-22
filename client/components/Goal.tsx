import GoalContainer from './UI/GoalContainer'

export default function Goal() {
  return (
    <div>
      <h1 className="goal-title">Choose your goal</h1>
      <div className="goal-div">
        <GoalContainer
          goal="Weight Loss"
          image="client/public/images/weightloss.png"
        />
        <GoalContainer
          goal="Gain Muscle"
          image="client/public/images/gainmuscle.png"
        />
        <GoalContainer
          goal="Body Building"
          image="client/public/images/bodybuild.png"
        />
      </div>
    </div>
  )
}
