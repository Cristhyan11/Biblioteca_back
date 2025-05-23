"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
// Book.service.ts
const Book_repository_1 = require("../repositories/Book.repository");
const Writer_repository_1 = require("../repositories/Writer.repository");
class BookService {
    async createBook(data) {
        if (!data.author?.id)
            throw new Error("author.id obligatorio");
        const writer = await Writer_repository_1.WriterRepo.findOneByOrFail({ id: data.author.id });
        const book = Book_repository_1.BookRepo.create({ ...data, author: writer });
        return Book_repository_1.BookRepo.save(book);
    }
    async getAllBooks() {
        return Book_repository_1.BookRepo.find({ relations: ["author"] });
    }
    async updateBookAuthor(bookId, writerId) {
        const book = await Book_repository_1.BookRepo.findOneByOrFail({ id: bookId });
        book.author = await Writer_repository_1.WriterRepo.findOneByOrFail({ id: writerId });
        return Book_repository_1.BookRepo.save(book);
    }
}
exports.BookService = BookService;
