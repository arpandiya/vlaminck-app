
exports.up = function(knex) {
  return knex.schema.createTable('menus', (table)=> {
      table.increments('id'),
      table.string('category'),
      table.string('menu_bl'),
      table.string('menu_fr'),
      table.string('menu_en'),
      table.integer('price'),
      table.timestamps(true, true)
  })
  .createTable('users', (table)=> {
      table.increments('id'),
      table.string('first_name'),
      table.string('last_name'),
      table.string('email'),
      table.string('password'),
      table.timestamps(true, true)
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('menus').dropTable('users');
};
