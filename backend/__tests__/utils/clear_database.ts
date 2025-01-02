import { db } from "../../src/lib/db.ts";

export default async function clearDatabase() {
  const database = db();

  try {
    const tables = await database.$queryRaw<Array<{ table_name: string }>>`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
        AND table_name !~ '^_'
        AND table_type != 'SYSTEM TYPE';
    `;

    for (const table of tables) {
      await database.$queryRawUnsafe(`TRUNCATE TABLE "${table.table_name}" RESTART IDENTITY CASCADE`);
    }
  } finally {
    database.$disconnect();
  }
}