exports.seed = async function (knex) {
  await knex('fitness_levels').insert([
    {
      user_id: 1,
      fitness_level: 3,
    },
    {
      user_id: 2,
      fitness_level: 2,
    },
  ])
}
