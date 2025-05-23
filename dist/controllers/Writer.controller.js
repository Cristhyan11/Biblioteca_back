"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWriters = exports.createWriter = void 0;
const Writer_service_1 = require("../services/Writer.service");
const writerService = new Writer_service_1.WriterService();
const createWriter = async (req, res, next) => {
    try {
        const writer = await writerService.createWriter(req.body);
        res.status(201).json(writer);
    }
    catch (err) {
        next(err);
    }
};
exports.createWriter = createWriter;
const getWriters = async (_req, res, next) => {
    try {
        const writers = await writerService.getAllWriters();
        res.json(writers);
    }
    catch (err) {
        next(err);
    }
};
exports.getWriters = getWriters;
