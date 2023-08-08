exports.up = function (knex) {
  return knex.schema.createTable('workout_goals', function (table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.string('workout_goal')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('workout_goals')
}
