import { SQL } from "bun";

let sql = new SQL({
  adapter: "mysql",
  host: "localhost",
  password: "",
  username: "root",
  port: 3306,

  database: "test",
});

async function DatabaseSetup(debug: boolean) {
  try {
    await sql.connect();
  } catch (error) {
    if (debug) {
      console.log(error);
    }
  }
}

export { DatabaseSetup, sql };
