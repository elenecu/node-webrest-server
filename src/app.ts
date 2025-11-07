import { envs } from "./config/envs";
import { AppRoutes } from "./presentation/routes";
import { Server } from "./presentation/server";
import express from 'express';


(async () => {
  await main();
})();

async function main () {
  //* Server
  const server = new Server({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH,
    routes: AppRoutes.routes
  });
  server.start();
}