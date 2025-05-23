"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBookAuthor = exports.getBooks = exports.createBook = void 0;
const Book_service_1 = require("../services/Book.service");
const bookService = new Book_service_1.BookService();
const createBook = async (req, res, next) => {
    try {
        const book = await bookService.createBook(req.body);
        res.status(201).json(book);
    }
    catch (err) {
        next(err);
    }
};
exports.createBook = createBook;
const getBooks = async (_req, res, next) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    }
    catch (err) {
        next(err);
    }
};
exports.getBooks = getBooks;
const updateBookAuthor = async (req, res, next) => {
    try {
        const updated = await bookService.updateBookAuthor(+req.params.id, req.body.writerId);
        res.json(updated);
    }
    catch (err) {
        next(err);
    }
};
exports.updateBookAuthor = updateBookAuthor;
