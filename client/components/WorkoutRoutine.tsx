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
        <>
          <section className="flex justify-center items-center">
            <div className="flex flex-col">
              <p>Pull Day</p>
              <ul
                key={index}
                className="border-2 border-white border-solid p-10 m-2 bg-white text-black w-1/5"
              >
                <li key={index}>{routine.pullday[1]}</li>
                <li key={index}>{routine.pullday[2]}</li>
                <li key={index}>{routine.pullday[3]}</li>
              </ul>
            </div>
            <div>
              <p>Push Day</p>
              <ul
                key={index}
                className="border-2 border-white border-solid p-10 m-2  bg-white text-black w-1/5"
              >
                <li key={index}>{routine.pushday[1]}</li>
                <li key={index}>{routine.pushday[2]}</li>
                <li key={index}>{routine.pushday[3]}</li>
              </ul>
            </div>
            <div>
              <p>Leg Day</p>
              <ul
                key={index}
                className="border-2 border-white border-solid p-10 m-2  bg-white text-black w-1/5"
              >
                <li key={index}>{routine.legday[1]}</li>
                <li key={index}>{routine.legday[2]}</li>
                <li key={index}>{routine.legday[3]}</li>
              </ul>
            </div>
          </section>
        </>
      ))}
    </>
  )
}
