import { envs } from "./config/envs";
import { Server } from "./presentation/server";
import express from 'express';


(async () => {
  await main();
})();

async function main () {
  //* Server
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
  });
  server.start();
}