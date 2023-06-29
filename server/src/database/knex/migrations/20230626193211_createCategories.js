exports.up = function(knex) {
  return knex.schema.createTable("categories", table => {
    table.uuid("id").primary()
    table.varchar("name").unique().notNullable()
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("categories")
};
