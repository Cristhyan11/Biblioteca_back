import { DataSource } from "typeorm";
import { Writer } from "../entities/Writer.entity";
import { Book } from "../entities/Book.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [__dirname + '/../entities/*.{ts,js}'],
  migrations: [],
  subscribers: [],
});
