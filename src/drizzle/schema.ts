// schema.ts
import { datetime, mysqlTable, serial } from "drizzle-orm/mysql-core";

export const example = mysqlTable("Example", {
  id: serial("id").primaryKey(),
  createdAt: datetime("createdAt").notNull(),
  updatedAt: datetime("updatedAt").notNull(),
});
