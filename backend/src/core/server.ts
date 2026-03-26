import routes from "@/routes/routes";
import { serve } from "bun";
declare global {
   var server : Bun.Server<undefined>
}
export class Server {
  server: Bun.Server<undefined> | any;
  async RunServer() {
    let serv = serve({
      hostname: process.env.APP_HOST,
      port: process.env.APP_PORT,
      idleTimeout: 10,
      routes: routes,
      fetch(req, server) {
        let url = new URL(req.url);
        if (url.pathname.startsWith(process.env.WEBSOCKET_PATH)) {
          server.upgrade(req);
          return;
        }
        return new Response("WebSocket upgrade failed", { status: 500 });
      },
      websocket: {
        open(ws) {
          ws.subscribe("chat:91");
        },
        message: function (ws) {
           ws.publish("chat:91","Jalan")
        },
        close(ws, code, reason) {
            ws.send("DIsconnected")
        },
      },
    });
    globalThis.server = serv
    console.log("🌐 Server running at: 3000");
  }
}
