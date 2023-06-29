exports.up = function(knex) {
  return knex.schema.createTable("dishes", table => {
    table.uuid("id").primary()
    table.varchar("image")
    table.varchar("name").unique().notNullable()
    table.integer("price").notNullable()
    table.text("description").notNullable()
    table.uuid("category_id").notNullable().references("id").inTable("categories").onDelete("CASCADE")
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("dishes")
};
