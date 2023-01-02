import HTTPServer from "./app";

const ENV_PORT: string | undefined = process.env.PORT;
const HTTP_SERVER_PORT: number = ENV_PORT ? parseInt(ENV_PORT) : 5000;
const CLI_SERVER_RUNNING_MSG = `[Server]: HTTP Server is currently on port ${HTTP_SERVER_PORT}.`;

HTTPServer
    .listen(HTTP_SERVER_PORT, () => console.log(CLI_SERVER_RUNNING_MSG));
