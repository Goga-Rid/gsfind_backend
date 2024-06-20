import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'groups'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').nullable()
      table.string('description').nullable()
      table.integer('owner_id').nullable()
      table.string('stack')
      table.integer('course').nullable()
      table.string('roles')
      table.string('contactUser')
      table.string('contactGroup')
      table.string('group')
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}