import { DateTime } from 'luxon'
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm'
import type { HasOne } from '@adonisjs/lucid/types/relations'
import User from '#models/user'

export default class Group extends BaseModel {
  @column({ isPrimary: true })
  declare id: number
  
  @column()
  declare name: string | null

  @column()
  declare description: string | null

  @column()
  declare ownerId: number | null

  @column()
  declare stack: string

  @column()
  declare course: number | null

  @column()
  declare roles: string

  @column({columnName: "contactUser"})
  declare contactUser: string

  @column({columnName: "contactGroup"})
  declare contactGroup: string

  @column()
  declare group: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasOne(() => User, {
    localKey: 'ownerId',
    foreignKey: 'id', // defaults to userId
  })
  declare profile: HasOne<typeof User>
}