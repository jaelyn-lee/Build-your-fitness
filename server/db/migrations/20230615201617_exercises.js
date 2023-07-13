exports.up = function(knex) {
  return knex.schema.createTable('exercises', function (table) {
    table.increments('id')
    table.string('name')
    table.string('description')
    table.string('muscle_group')
    table.integer('difficulty')
    table.integer('reps')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('exercises')
};
