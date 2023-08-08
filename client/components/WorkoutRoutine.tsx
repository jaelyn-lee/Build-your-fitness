//TODO: DISPLAY THE GENERATED WORKOUT ROUTINE BASED ON USER PREFERENCES.

export default function WorkoutRoutine() {
  const generatedWorkout = [
    {
      id: 1,
      name: 'Pull-ups',
      description: 'Open up your chest and pull up until you fail.',
      muscle_group: 'Lats',
      difficulty: '9',
      reps: '15',
    },
    {
      id: 2,
      name: 'Squats',
      description:
        'Stand with feet shoulder-width apart, lower the body by bending the knees, and then rise back up.',
      muscle_group: 'Legs',
      difficulty: '6',
      reps: '12',
    },
    {
      id: 3,
      name: 'Push-ups',
      description:
        'Perform a push-up by lowering and raising the body using the arms.',
      muscle_group: 'Chest, Arms',
      difficulty: '5',
      reps: '10',
    },
    {
      id: 4,
      name: 'Plank',
      description:
        'Hold a push-up position with the body straight and abs engaged.',
      muscle_group: 'Core',
      difficulty: '3',
      reps: '60 seconds',
    },
    {
      id: 5,
      name: 'Bench Press',
      description:
        'Lie on a flat bench and press a barbell upwards until the arms are extended.',
      muscle_group: 'Chest, Arms',
      difficulty: '7',
      reps: '8',
    },
    {
      id: 6,
      name: 'Deadlifts',
      description:
        'Lift a loaded barbell off the ground by extending the hips and knees.',
      muscle_group: 'Legs, Back',
      difficulty: '8',
      reps: '6',
    },
    {
      id: 7,
      name: 'Dumbbell Shoulder Press',
      description:
        'Sit on a bench and press dumbbells overhead until the arms are fully extended.',
      muscle_group: 'Shoulders, Arms',
      difficulty: '6',
      reps: '10',
    },
    {
      id: 8,
      name: 'Barbell Rows',
      description:
        'Bend over with a barbell and pull it up to the upper abdomen while keeping the back straight.',
      muscle_group: 'Back',
      difficulty: '7',
      reps: '8',
    },
    {
      id: 9,
      name: 'Lunges',
      description:
        'Step forward with one leg, lowering the hips until both knees are bent at a 90-degree angle.',
      muscle_group: 'Legs',
      difficulty: '5',
      reps: '12',
    },
    {
      id: 10,
      name: 'Bicep Curls',
      description:
        'Hold dumbbells in hand, palms facing forward, and curl the weights towards the shoulders.',
      muscle_group: 'Arms',
      difficulty: '4',
      reps: '12',
    },
    {
      id: 11,
      name: 'Russian Twists',
      description:
        'Sit on the floor, lean back slightly, and twist the torso from side to side, touching the floor with the hands.',
      muscle_group: 'Core',
      difficulty: '3',
      reps: '20',
    },
    {
      id: 12,
      name: 'Leg Press',
      description:
        'Sit on a leg press machine and push the weight away using the legs.',
      muscle_group: 'Legs',
      difficulty: '6',
      reps: '10',
    },
    {
      id: 13,
      name: 'Tricep Dips',
      description:
        'Sit on the edge of a bench, place hands next to hips, and lower the body by bending the elbows.',
      muscle_group: 'Arms',
      difficulty: '5',
      reps: '12',
    },
    {
      id: 14,
      name: 'Mountain Climbers',
      description:
        'Assume a push-up position and bring one knee to the chest while extending the other leg.',
      muscle_group: 'Core, Legs',
      difficulty: '4',
      reps: '20',
    },
    {
      id: 15,
      name: 'Hamstring Curls',
      description:
        'Lie on a machine face down and curl the legs towards the buttocks by flexing the knees.',
      muscle_group: 'Legs',
      difficulty: '5',
      reps: '10',
    },
  ]

  return (
    <>
      <h1>Thank you! Here is your workout routine!</h1>
      <div className="flex justify-center items-center">
        <ul className="flex">
          {generatedWorkout.map((routine, index) => (
            <>
              <div className="border-2 border-white border-solid p-10 m-2 bg-white text-black w-44">
                <li key={index}>Name: {routine.name}</li>
                <li key={index}>Description: {routine.description}</li>
                <li key={index}>Target Muscle: {routine.muscle_group}</li>
                <li key={index}>Reps per set: {routine.reps}</li>
              </div>
            </>
          ))}
        </ul>
      </div>
    </>
  )
}
