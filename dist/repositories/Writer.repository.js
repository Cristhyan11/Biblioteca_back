"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriterRepo = void 0;
// Writer.repository.ts
const database_1 = require("../config/database");
const Writer_entity_1 = require("../entities/Writer.entity");
exports.WriterRepo = database_1.AppDataSource.getRepository(Writer_entity_1.Writer);
