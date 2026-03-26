import html from "../../view/index.html";
export default {
  "/html" : html,
  "/": (req: Bun.BunRequest<"/">) => {
    globalThis.server.publish("chat:91", "Berhasil jalan di webserver1192");
    return Response.json({
      status: "OKE",
    });
  },
};
