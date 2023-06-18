exports.up = function(knex) {
  return knex.schema.createTable('users', function (table) {
    table.increments('id')
    table.string('userId')
    table.integer('height')
    table.integer('weight')
    table.string('goal')
    table.integer('level_of_fitness')
  })
}

exports.down = function(knex) {
  return knex.dropTable('users')
};
