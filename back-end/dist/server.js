"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const ENV_PORT = process.env.PORT;
const HTTP_SERVER_PORT = ENV_PORT ? parseInt(ENV_PORT) : 5000;
const CLI_SERVER_RUNNING_MSG = `[Server]: HTTP Server is currently on port ${HTTP_SERVER_PORT}.`;
app_1.default.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log('server startup error: address already in use');
    }
    else {
        console.log(err);
    }
});
app_1.default.listen(HTTP_SERVER_PORT, () => console.log(CLI_SERVER_RUNNING_MSG));
