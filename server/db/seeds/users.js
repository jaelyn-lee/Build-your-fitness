exports.seed = async function(knex) {
  await knex('users').del()
  await knex('users').insert([
    {id: 1, userId: 'Jaelyn', height: '158', weight: '50', goal: '48', level_of_fitness: '6'},
    {id: 2, userId: 'Emma', height: '165', weight: '55', goal: '51', level_of_fitness: '7'},
    {id: 3, userId: 'David', height: '185', weight: '60', goal: '75', level_of_fitness: '3'}
  ]);
};
