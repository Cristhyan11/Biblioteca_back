"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const writer_routes_1 = __importDefault(require("./routes/writer.routes"));
const book_routes_1 = __importDefault(require("./routes/book.routes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: [
        "http://localhost:5173",
        "https://biblioteca-front.vercel.app" // Cambia esto por la URL real de tu frontend en Vercel
    ],
    credentials: true,
}));
app.use(express_1.default.json());
app.use("/writers", writer_routes_1.default);
app.use("/books", book_routes_1.default);
app.use((req, res) => res.status(404).json({ message: "Not Found" }));
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});
exports.default = app;
