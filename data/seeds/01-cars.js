/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
    // Deletes ALL existing entries
    await knex('cars').truncate()
    await knex('cars').insert([
      {vin: '13hkj3hih32uho32323gi', make: 'Ford', model: 'Mustang', mileage: 400, title: 'clean', transmission: 'auto'},
      {vin: '4353492hhuiu345452234', make: 'Chevy', model: 'Nova', mileage:55639, transmission: 'auto'},
      {vin: '345345iuyi234549hkjh3', make: 'Ford',  model: 'Explorer', mileage:6789.3}
    ]);
  };
