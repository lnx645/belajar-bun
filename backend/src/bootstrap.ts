import { SetupDatabaseConnection } from "@/core/database/connection";
import { Server } from "./core/server";
export async function bootstrap() {
  try {
    console.log("🚀 Starting Server");
    //SETUP DATABASE CONNECTION
    await SetupDatabaseConnection();
    console.log("✅ Database Connected");
    //setup server websocket
    let server = new Server();
    await server.RunServer();    
  } catch (error) {
    console.log("❌ Failed To Start Server");
    console.error(error);
    process.exit(1);
  }
}
