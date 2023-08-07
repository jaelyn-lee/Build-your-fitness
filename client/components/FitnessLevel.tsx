import { useState } from 'react'
import RatingScale from './RatingScale'
import Button from './UI/Buttons/Button'
import { useNavigate } from 'react-router-dom'

export default function FitnessLevel() {
  const [rating, setRating] = useState(0)
  const navigate = useNavigate()

  const handleRatingChange = (newRating: number) => {
    setRating(newRating)
  }

  const handleClick = () => {
    navigate('/workout-routine')
  }
  return (
    <div className="grid place-content-center text-center w-full gap-6 pt-32">
      <h1 className="text-4xl font-extrabold">
        Rate your fitness level from 0 to 10:
      </h1>
      <RatingScale rating={rating} onChange={handleRatingChange} />
      <Button content="Next" onClick={handleClick} />
    </div>
  )
}
