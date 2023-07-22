import { useNavigate } from 'react-router-dom'

interface goals {
  image: string
  goal: string
}

export default function GoalContainer(props: goals) {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log(`${props.goal} clicked`)
    navigate('/')
  }
  return (
    <div className="goal-container">
      <img
        src={props.image}
        alt={props.goal}
        className="goal-container-image"
      />
      <button className="goal-container-button" onClick={handleClick}>
        {props.goal}
      </button>
    </div>
  )
}
