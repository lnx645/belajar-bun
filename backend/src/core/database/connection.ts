import { SQL } from "bun";

const DB = new SQL({
    adapter : "mysql",
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    username : process.env.DB_USER,
    database : process.env.DB_NAME,
    connectionTimeout:5,
})
async function SetupDatabaseConnection() {
  try {
    await DB.connect();
  } catch (error) {
    console.log((error as any).message);
    process.exit(1);
  }
}
export {
    DB,
    SetupDatabaseConnection
}