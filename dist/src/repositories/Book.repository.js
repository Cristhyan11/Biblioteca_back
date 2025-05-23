"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRepo = void 0;
// Book.repository.ts
const database_1 = require("../config/database");
const Book_entity_1 = require("../entities/Book.entity");
exports.BookRepo = database_1.AppDataSource.getRepository(Book_entity_1.Book);
