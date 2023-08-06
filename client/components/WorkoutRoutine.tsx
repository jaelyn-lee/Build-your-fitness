//TODO: DISPLAY THE GENERATED WORKOUT ROUTINE BASED ON USER PREFERENCES.

export default function WorkoutRoutine() {
  const generatedWorkout = [
    {
      pullday: {
        1: 'push-up',
        2: 'pull-up',
        3: 'lat pull down',
      },
      pushday: {
        1: 'push-up',
        2: 'pull-up',
        3: 'lat pull down',
      },
      legday: {
        1: 'Leg extension',
        2: 'Leg curl',
        3: 'Barbell squat',
      },
    },
  ]

  return (
    <>
      <h1>Thank you! Here is your workout routine!</h1>
      {generatedWorkout.map((routine, index) => (
        <ul>
          <li key={index}>{routine.pullday[1]}</li>
        </ul>
      ))}
    </>
  )
}
