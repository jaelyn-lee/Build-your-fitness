exports.seed = async function (knex) {
  await knex('users').del()
  await knex('exercises').del()

  await knex('fitness_levels').del()
  await knex('workout_goals').del()
}
