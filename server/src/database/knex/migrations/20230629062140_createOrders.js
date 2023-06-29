exports.up = function(knex) {
  return knex.schema.createTable("orders", table => {
    table.uuid("id").primary()
    table.increments("code").unsigned()
    table.uuid("status_id").references("id").inTable("order_status").onDelete("CASCADE").notNullable()
    table.uuid("user_id").references("id").inTable("users").onDelete("CASCADE").notNullable()
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable("orders")
}
