"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// book.routes.ts
const express_1 = require("express");
const Book_controller_1 = require("../controllers/Book.controller");
const router = (0, express_1.Router)();
router.post("/", Book_controller_1.createBook); // Crear libro
router.get("/", Book_controller_1.getBooks); // Listar libros
router.put("/:id/author", Book_controller_1.updateBookAuthor); // Actualizar autor
exports.default = router;
