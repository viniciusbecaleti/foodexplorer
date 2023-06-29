exports.up = function(knex) {
  return knex.schema.createTable("orders_dishes", table => {
    table.uuid("id").primary()
    table.uuid("order_id").references("id").inTable("orders").onDelete("CASCADE").notNullable()
    table.uuid("dish_id").references("id").inTable("dishes").onDelete("CASCADE").notNullable()
    table.integer("quantity").notNullable()
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("orders_dishes")
};
