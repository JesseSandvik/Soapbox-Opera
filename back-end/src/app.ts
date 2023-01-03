import express, { Express, Request, Response } from "express";
import * as http from "http";
import * as WebSocket from "ws";
import dotenv from "dotenv";

interface ExtendedWebSocket extends WebSocket {
    isAlive: boolean;
}

dotenv.config();
const app: Express = express();

const server: http.Server = http.createServer(app);

const webSocketServer: WebSocket.Server = new WebSocket.Server({ server });

webSocketServer.on('connection', (webSocket: WebSocket) => {
    const extendedWebSocket: ExtendedWebSocket = webSocket as ExtendedWebSocket;

    extendedWebSocket.isAlive = true;

    webSocket.on('pong', () => {
        extendedWebSocket.isAlive = true;
    });

    webSocket.send('[Server]: WebSocket server connected.');
    webSocket.on('message', (msg: string) => {

        const BROADCAST_REGEX: RegExp = /^broadcast\:/;

        console.log('[Received]: %s', msg);

        if (BROADCAST_REGEX.test(msg)) {
            console.log(msg.toString());
            msg = msg.toString();
            msg = msg.replace(BROADCAST_REGEX, '');

            webSocketServer.clients.forEach(client => {
                if (client != webSocket) {
                    client.send(`[Server]: Broadcast message:\n${msg}`);
                }
            })
        } else {
            webSocket.send(`Hello, you sent:\n${msg}`);
        }
    });

    setInterval(() => {
        webSocketServer.clients.forEach(client => {
            if (!extendedWebSocket.isAlive) {
                return webSocket.terminate();
            }

            extendedWebSocket.isAlive = false;
            webSocket.ping(null, undefined);
        });
    }, 10000);
});

export default server;
