import "reflect-metadata";
import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import writerRouter from "./routes/writer.routes";
import bookRouter from "./routes/book.routes";
import { AppDataSource } from "./config/database";
import cors from "cors";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.get("/health", (_req: Request, res: Response) => {
  console.log("🚀 Servidor desplegado y funcionando correctamente en Vercel");
  res.json({ ok: true, message: "Servidor funcionando correctamente" });
});

app.use("/writers", writerRouter);
app.use("/books", bookRouter);

app.use((req: Request, res: Response) => 
  res.status(404).json({ message: "Not Found" })
);

app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
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
  export default app;
