import "reflect-metadata";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import writerRouter from "./routes/writer.routes";
import bookRouter from "./routes/book.routes";
import { AppDataSource } from "./config/database";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://biblioteca-front.vercel.app" // Cambia esto por la URL real de tu frontend en Vercel
    ],
    credentials: true,
  })
);

app.use(express.json());

app.use("/writers", writerRouter);
app.use("/books", bookRouter);

app.use((req: Request, res: Response) =>
  res.status(404).json({ message: "Not Found" })
);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

export default app;