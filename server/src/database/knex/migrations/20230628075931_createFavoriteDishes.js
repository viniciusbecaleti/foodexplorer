exports.up = function(knex) {
  return knex.schema.createTable("favorite_dishes", table => {
    table.uuid("id").primary()
    table.uuid("dish_id").references("id").inTable("dishes").onDelete("CASCADE").notNullable()
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable()
    table.timestamp("created_at").default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("favorite_dishes")
};
