const server = Bun.serve({
  port: 6000,
  async fetch(req) {
    const path = new URL(req.url).pathname;

    if (path === "/") {
      return new Response(Bun.file("main/name.html"));

    }
    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listening on ${server.url}`);
