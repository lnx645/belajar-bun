import { randomUUIDv5, secrets, serve } from "bun";
import { DatabaseSetup, sql } from "./src/db";
import type { User } from "./src/models/user-model";

await (async () => {
  await DatabaseSetup(true);
  //setup lainnya
  const server = serve({
    routes: {
      "/": async (req) => {
        //get users
        secrets.set({
          service: "google",
          name: "alice",
          value: "alicepass",
        });
        let users: User[] = await sql`SELECT * FROM users`;
        return Response.json(users.find((e) => e.id == 1));
      },
    },
    fetch(req, server) {
      if (server.upgrade(req)) {
        return;
      }
      return new Response("Not found");
    },
    websocket: {
      open(ws) {},
      message: function () {},
    },
  });
  console.log(server.url.host);
})();
