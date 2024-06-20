var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { DateTime } from 'luxon';
import { BaseModel, column, hasOne } from '@adonisjs/lucid/orm';
import User from '#models/user';
export default class Group extends BaseModel {
}
__decorate([
    column({ isPrimary: true }),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Group.prototype, "name", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Group.prototype, "description", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Group.prototype, "ownerId", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Group.prototype, "stack", void 0);
__decorate([
    column(),
    __metadata("design:type", Object)
], Group.prototype, "course", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Group.prototype, "roles", void 0);
__decorate([
    column({ columnName: "contactUser" }),
    __metadata("design:type", String)
], Group.prototype, "contactUser", void 0);
__decorate([
    column({ columnName: "contactGroup" }),
    __metadata("design:type", String)
], Group.prototype, "contactGroup", void 0);
__decorate([
    column(),
    __metadata("design:type", String)
], Group.prototype, "group", void 0);
__decorate([
    column.dateTime({ autoCreate: true }),
    __metadata("design:type", DateTime)
], Group.prototype, "createdAt", void 0);
__decorate([
    column.dateTime({ autoCreate: true, autoUpdate: true }),
    __metadata("design:type", DateTime)
], Group.prototype, "updatedAt", void 0);
__decorate([
    hasOne(() => User, {
        localKey: 'ownerId',
        foreignKey: 'id',
    }),
    __metadata("design:type", Object)
], Group.prototype, "profile", void 0);
//# sourceMappingURL=group.js.map