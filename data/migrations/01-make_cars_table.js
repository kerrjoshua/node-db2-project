/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable('cars', tbl => {
    tbl.increments()
    tbl.string('vin')
      .notNullable()
      .unique()
    tbl.string('make')
      .notNullable()
    tbl.string('model')
      .notNullable()
    tbl.decimal('mileage').notNullable()
    tbl.string('title')
    tbl.string('transmission')

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('cars')
};
