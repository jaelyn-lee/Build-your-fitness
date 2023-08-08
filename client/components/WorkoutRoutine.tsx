import { useLocation } from 'react-router-dom'
import { fetchExercises } from '../api/exercises'
import { useEffect, useState } from 'react'

interface Exercises {
  id: number
  name: string
  description: string
  muscle_group: string
  difficulty: string
  reps: number
}

export default function WorkoutRoutine() {
  const location = useLocation()
  const user = location.state?.user
  const fitnessLevel = user.fitness_level

  const [fetchedExercises, setFetchedExercises] = useState([] as Exercises[])

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchExercises()
        setFetchedExercises(data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  console.log(fitnessLevel)

  const filteredExercises = fetchedExercises.filter(
    (exercise) =>
      (fitnessLevel >= 0 &&
        fitnessLevel <= 3 &&
        exercise.difficulty === 'Beginner') ||
      (fitnessLevel >= 4 &&
        fitnessLevel <= 7 &&
        exercise.difficulty === 'Intermediate') ||
      (fitnessLevel >= 8 &&
        fitnessLevel <= 10 &&
        exercise.difficulty === 'Advanced'),
  )

  return (
    <>
      <h1>Thank you, {user.first_name}! Here is your workout routine!</h1>
      <div className="flex justify-center items-center">
        <ul className="flex">
          {filteredExercises.map((routine, index) => (
            <div
              className="border-2 border-white border-solid p-10 m-2 bg-white text-black w-44"
              key={index}
            >
              <li>Name: {routine.name}</li>
              <li>Description: {routine.description}</li>
              <li>Target Muscle: {routine.muscle_group}</li>
              <li>Reps per set: {routine.reps}</li>
            </div>
          ))}
        </ul>
      </div>
    </>
  )
}
