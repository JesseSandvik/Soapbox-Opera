import * as http from "http";
import HTTPServer from "./app";

const ENV_SPECIFIED_PORT: string | undefined = process.env.PORT;
const HTTP_SERVER_PORT: number = ENV_SPECIFIED_PORT ? parseInt(ENV_SPECIFIED_PORT) : 5000;
const CLI_SERVER_RUNNING_MSG = `[Server]: HTTP Server running successfully on port ${HTTP_SERVER_PORT}\n\n\tNavigate to http://localhost:${HTTP_SERVER_PORT}\n`;

interface Logger {
    log(msg: string): void;
}

function startHTTPServer(port: number, logger: Logger, serverDisplayMsg: string): http.Server {
    return HTTPServer.listen(port, () => logger.log(serverDisplayMsg));
}

startHTTPServer(HTTP_SERVER_PORT, console, CLI_SERVER_RUNNING_MSG);
