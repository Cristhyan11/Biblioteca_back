"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Writer_entity_1 = require("../entities/Writer.entity");
const Book_entity_1 = require("../entities/Book.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    url: process.env.DATABASE_URL, // URL de conexión de Supabase (Postgres)
    synchronize: true,
    logging: false,
    entities: [Writer_entity_1.Writer, Book_entity_1.Book],
    migrations: [],
    subscribers: [],
});
