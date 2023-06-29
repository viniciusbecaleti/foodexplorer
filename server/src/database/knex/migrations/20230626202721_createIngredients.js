exports.up = function(knex) {
  return knex.schema.createTable("ingredients", table => {
    table.uuid("id").primary()
    table.varchar("name").notNullable()
    table.uuid("dish_id").references("id").inTable("dishes").onDelete("CASCADE")
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("ingredients")
};
