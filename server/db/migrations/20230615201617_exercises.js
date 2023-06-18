exports.up = function(knex) {
  return knex.schema.createTable('exercises', function (table) {
    table.increments('id')
    table.string('name')
    table.string('target_muscles')
    table.integer('difficulty')
    table.string('instructions')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('exercises')
};
