const server = Bun.serve({
  port: 6000,
  async fetch(req) {
    const path = new URL(req.url).pathname;
    const file = Bun.file('./name.txt')
    const message = await file.text()

    console.log(message)

    if (path === "/") {
      return new Response("Welcome to Bun!");
    }

    return new Response("Not found", { status: 404 });
  },
});

console.info(`Listening on ${server.url}`);
