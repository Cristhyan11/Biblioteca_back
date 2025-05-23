import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import "reflect-metadata";
import { AppDataSource } from "./config/database";
import cors from "cors";
import writerRouter from "./routes/writer.routes";
import bookRouter from "./routes/book.routes";

const app = express();

// Configuración de CORS
app.use(cors({
  origin: [
    "http://localhost:5173",
    "https://biblioteca-front.vercel.app"
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// Aumentar el límite de payload
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

// Rutas
app.use("/writers", writerRouter);
app.use("/books", bookRouter);

// 404 handler
app.use((req: Request, res: Response) =>
  res.status(404).json({ message: "Not Found" })
);

// Error handler
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);
  res.status(500).json({ message: err.message });
});

// Inicialización de la base de datos y arranque del servidor solo en local
AppDataSource.initialize().then(() => {
  if (process.env.VERCEL === "1") {
    // En Vercel, no arrancar el servidor, solo exportar el handler
  } else {
    app.listen(3000, '0.0.0.0', () => {
      console.log("🚀 Server running on http://localhost:3000");
    });
  }
});

export default app;