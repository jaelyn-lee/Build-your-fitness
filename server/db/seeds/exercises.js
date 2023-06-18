exports.seed = async function(knex) {
  await knex('exercises').del()
  await knex('exercises').insert([
    {id: 1, name: 'pullups', target_muscles: 'lats', difficulty: 'intermediate', instructions: 'Open up your chest and pull up until you fail.'},
    {id: 2, name: 'bench incline dumbbell fly', target_muscles: 'chest', difficulty: 'intermediate', instructions: ''},
    {id: 3, name: 'Bench incline dumbbell press', target_muscles: 'chest', difficulty: 'intermediate', instructions: ''},
    {id: 4, name: 'Barbbell shoulder press', target_muscles: 'shoulder', difficulty: 'intermediate', instructions: ''},
    {id: 5, name: 'Deadlift', target_muscles: 'lats', difficulty: 'intermediate', instructions: ''},
    {id: 6, name: 'Chest press', target_muscles: 'chest', difficulty: 'intermediate', instructions: ''},
    {id: 7, name: 'Squat', target_muscles: 'quads', difficulty: 'intermediate', instructions: ''},
    {id: 8, name: 'Walking lunge', target_muscles: 'glutes', difficulty: 'intermediate', instructions: ''}
  ]);
};
