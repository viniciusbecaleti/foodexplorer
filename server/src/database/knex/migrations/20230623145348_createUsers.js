exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.uuid("id").primary()
    table.varchar("name").notNullable()
    table.varchar("email").unique().notNullable()
    table.varchar("password").notNullable()
    table.boolean("admin").default(0)
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable("users")
};
