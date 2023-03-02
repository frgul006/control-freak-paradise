import { createServer } from "./server";
import { log } from "@cfp/logger";

// eslint-disable-next-line turbo/no-undeclared-env-vars
const port = process.env.PORT || 8080;
const server = createServer();

server.listen(port, () => {
  log(`api running on ${port}`);
});
