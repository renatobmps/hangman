import db from "./server/models/index.js";

async function prepare() {
  try {
    try {
      await db.sequelize.sync();
      console.info("Database synced successfully");
    } catch (error) {
      throw new Error(error.message || "Database error");
    }
  } catch (error) {
    console.error(error.message || "App error");
  }
}

prepare();
