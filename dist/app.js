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
app.use((0, cors_1.default)({ origin: "http://localhost:5173" }));
app.use(express_1.default.json());
app.get("/health", (_req, res) => res.json({ ok: true }));
app.use("/writers", writer_routes_1.default);
app.use("/books", book_routes_1.default);
app.use((req, res) => res.status(404).json({ message: "Not Found" }));
app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).json({ message: err.message });
});
/*
const PORT = process.env.PORT || 3000;

AppDataSource.initialize()
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🚀 Server running on http://localhost:${PORT}`)
    )
  )
  .catch(err => {
    console.error("DB init error:", err);
    process.exit(1);
  });*/
exports.default = app;
