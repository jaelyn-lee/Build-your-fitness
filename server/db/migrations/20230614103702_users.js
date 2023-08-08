exports.up = function (knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('first_name')
    table.string('last_name')
    table.integer('age')
    table.float('height')
    table.float('weight')
    table.float('target_weight')
  })
}

exports.down = function (knex) {
  return knex.dropTable('users')
}
