const up = (knex) => {
  return knex.schema.createTable('products', (table) => {
    table.collate('utf8mb4_unicode_ci');
    table.uuid('id').primary().notNullable();
    table.string('category', 255);
    table.string('name', 255);
    table.float('price', 255);
    table.dateTime('created_at').defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    table
      .dateTime('updated_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'));
    table.dateTime('removed_at').defaultTo(null);
  });
};

const down = (knex) => {
  return knex.schema.dropTable('products');
};

module.exports = { up, down };
