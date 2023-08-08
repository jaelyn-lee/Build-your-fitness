exports.seed = async function(knex) {
  await knex('workout_goals').insert([
    {
      user_id: 1,
      workout_goal: 'Build Muscle'
    },
    {
      user_id: 2,
      workout_goal: 'Lose Weight'
    },
  ])
  
};
