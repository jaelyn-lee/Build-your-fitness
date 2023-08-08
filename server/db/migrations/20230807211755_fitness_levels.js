exports.up = function (knex) {
  return knex.schema.createTable('fitness_levels', function (table) {
    table.increments('id').primary()
    table.integer('user_id').references('users.id')
    table.integer('fitness_level')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('fitness_levels')
}
