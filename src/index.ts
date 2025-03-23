import { startServer } from "./server";
import pool from "./config/db";
import { runSchema } from "./utils/runSchema";

async function init() {
  try {
    const result = await pool.query("SELECT NOW()");
    console.log("Database Connected:", result.rows[0].now);
    await runSchema();
    startServer();
  } catch (err) {
    console.error("Error initializing app:", err);
  }
}

init();
