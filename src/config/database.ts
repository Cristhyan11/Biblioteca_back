import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL, // URL de conexión de Supabase (Postgres)
  synchronize: true,
  logging: false,
  entities: [Writer, Book],
  migrations: [],
  subscribers: [],
});