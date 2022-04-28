/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('users', function(table){
    table.string('id').primary();
    table.string('email').notNullable();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.string('birthday', 8).notNullable();
    table.string('genre').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
