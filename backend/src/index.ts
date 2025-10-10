import server from "./infrastructure/server.ts";

async function start() {
  const { url } = await server.listen();

  console.info(`Api server listening on ${url}`)
}

start();