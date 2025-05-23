"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WriterService = void 0;
// Writer.service.ts
const Writer_repository_1 = require("../repositories/Writer.repository");
class WriterService {
    async createWriter(data) {
        const w = Writer_repository_1.WriterRepo.create(data); // Construye la entidad
        return Writer_repository_1.WriterRepo.save(w); // Persiste en BD
    }
    async getAllWriters() {
        return Writer_repository_1.WriterRepo.find({ relations: ["books"] }); // Incluye libros
    }
}
exports.WriterService = WriterService;
